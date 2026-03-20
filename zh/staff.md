---
layout: page
title: 课程团队
description: DSC 291 2026 春季课程团队
nav_exclude: true
lang: zh
lang_ref: staff
---

# 课程团队

## 授课教师

{% assign staffers = site.staffers | where: 'lang', page.lang %}
{% assign instructors = staffers | where: 'role', 'Instructor' %}

<div class="role flex">
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}
</div>

## 助教

{% assign teaching_assistants = staffers | where: 'role', 'Teach Assistant' %}

<div class="role flex">
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
</div>
