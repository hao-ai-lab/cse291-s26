---
layout: home
title: 首页
nav_order: 1
nav_exclude: true
permalink: /zh/index.html
lang: zh
lang_ref: home
seo:
  type: Course
  name: CSE 291A/DSC 291 Spring 2026
---

# CSE 291A/DSC 291：面向机器学习的数据系统

{: .mb-2 }
Instructor: Hao Zhang, UC San Diego, Spring 2026
{: .mb-2 .fs-6 .text-grey-dk-000 }

## 课程公告

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
