---
---
(function () {
  var supportedLanguages = ["en", "zh"];
  var defaultLanguage = "en";
  var pageEntries = [
    {% assign translatable_pages = site.pages | where_exp: "item", "item.lang_ref" %}
    {% for item in translatable_pages %}
    {
      ref: {{ item.lang_ref | jsonify }},
      lang: {{ item.lang | default: "en" | jsonify }},
      title: {{ item.title | jsonify }},
      url: {{ item.url | relative_url | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function normalizePath(path) {
    if (!path) {
      return "/";
    }

    var normalized = path.replace(/\/index\.html$/, "/");
    normalized = normalized.replace(/index\.html$/, "/");
    normalized = normalized.replace(/\/+$/, "/");

    if (normalized.charAt(0) !== "/") {
      normalized = "/" + normalized;
    }

    return normalized;
  }

  function buildPageMaps(entries) {
    var groups = {};
    var byPath = {};

    entries.forEach(function (entry) {
      if (!groups[entry.ref]) {
        groups[entry.ref] = {};
      }

      entry.url = normalizePath(entry.url);
      groups[entry.ref][entry.lang] = entry;
      byPath[entry.url] = entry;
    });

    return { groups: groups, byPath: byPath };
  }

  function getPreferredLanguage() {
    var stored = localStorage.getItem("preferredLanguage");
    return supportedLanguages.indexOf(stored) >= 0 ? stored : null;
  }

  function setPreferredLanguage(lang) {
    if (supportedLanguages.indexOf(lang) >= 0) {
      localStorage.setItem("preferredLanguage", lang);
    }
  }

  function updateSwitcher(activeLanguage, currentPage, groups) {
    var toggle = document.querySelector("[data-lang-toggle]");
    if (!toggle) {
      return;
    }

    var targetLanguage = activeLanguage === "zh" ? "en" : "zh";
    var fallback = groups.home && (groups.home[targetLanguage] || groups.home[defaultLanguage]);
    var counterpart = currentPage && groups[currentPage.ref]
      ? groups[currentPage.ref][targetLanguage]
      : null;
    var destination = counterpart || fallback;

    if (destination) {
      toggle.href = destination.url;
    }

    toggle.textContent = targetLanguage === "zh" ? "ZH" : "EN";
    toggle.setAttribute(
      "aria-label",
      targetLanguage === "zh" ? "Switch language to Chinese" : "Switch language to English"
    );

    toggle.addEventListener("click", function () {
      setPreferredLanguage(targetLanguage);
    });
  }

  function rewriteLocalizedLinks(activeLanguage, byPath, groups) {
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (link.hasAttribute("data-lang-toggle")) {
        return;
      }

      var rawHref = link.getAttribute("href");
      if (!rawHref || rawHref.charAt(0) === "#" || rawHref.indexOf("mailto:") === 0 || rawHref.indexOf("tel:") === 0) {
        return;
      }

      var url;
      try {
        url = new URL(link.href, window.location.origin);
      } catch (error) {
        return;
      }

      if (url.origin !== window.location.origin) {
        return;
      }

      var normalizedPath = normalizePath(url.pathname);
      var currentTarget = byPath[normalizedPath];
      if (!currentTarget || !groups[currentTarget.ref]) {
        return;
      }

      var localizedTarget = groups[currentTarget.ref][activeLanguage] || groups[currentTarget.ref][defaultLanguage];
      if (!localizedTarget) {
        return;
      }

      link.href = localizedTarget.url + url.search + url.hash;

      if (link.closest(".nav-list") || link.closest(".aux-nav-list") || link.closest(".breadcrumb-nav")) {
        link.textContent = localizedTarget.title;
      }
    });
  }

  var maps = buildPageMaps(pageEntries);
  var currentPath = normalizePath(window.location.pathname);
  var currentPage = maps.byPath[currentPath] || null;
  var preferredLanguage = getPreferredLanguage();
  var activeLanguage = currentPage ? currentPage.lang : (preferredLanguage || defaultLanguage);

  if (currentPage && preferredLanguage && preferredLanguage !== currentPage.lang) {
    var alternate = maps.groups[currentPage.ref] && maps.groups[currentPage.ref][preferredLanguage];
    if (alternate) {
      window.location.replace(alternate.url + window.location.search + window.location.hash);
      return;
    }
  }

  document.documentElement.setAttribute("lang", activeLanguage);
  updateSwitcher(activeLanguage, currentPage, maps.groups);
  rewriteLocalizedLinks(activeLanguage, maps.byPath, maps.groups);
})();
