---
layout: page
title: 公告
nav_exclude: true
lang: zh
lang_ref: announcements
description: 课程公告列表。
---

# 公告

下面列出本课程的全部公告内容。

{% assign announcements = site.announcements | where: 'lang', page.lang | reverse %}
{% for announcement in announcements %}
  {{ announcement }}
{% endfor %}
