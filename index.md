---
layout: home
title: Home
nav_order: 1
nav_exclude: false
permalink: index.html
lang_ref: home
seo:
  type: Course
  name: CSE 291 Spring 2026
---

# CSE 291: Data Systems for Machine Learning

{: .mb-2 }
Instructor: Hao Zhang, UC San Diego, Spring 2026
{: .mb-2 .fs-6 .text-grey-dk-000 }

Also available as DSC 291.
{: .fs-4 .text-grey-dk-000 }

<!-- [Lecture Recordings]({https://bcourses.berkeley.edu/courses/COURSE_ID/external_tools/KALTURA_ID}){: .btn .btn-blue} -->

## Announcements


{% assign announcements = site.announcements | where: 'lang', page.lang | reverse %}
{% for announcement in announcements limit:1 %}
{{ announcement }}
{% endfor %}


{% assign mods = site.modules | where: 'class', 'CSE291' | where: 'lang', page.lang %}
{% assign active_mods = '' | split: '' %}

{% for mod in mods %}
  {% if mod.status == 'Active' %}
    {% assign active_mods = active_mods | push: mod %}
  {% endif %}
{% endfor %}

{% for module in active_mods %}
  {{ module }}
{% endfor %}
