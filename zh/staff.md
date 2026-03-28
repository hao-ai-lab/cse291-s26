---
layout: page
title: 课程团队
description: CSE 291A/DSC 291 2026 春季课程团队
nav_exclude: true
lang: zh
lang_ref: staff
---

# 课程团队

课程邮箱：[cse291a-sp26@googlegroups.com](mailto:cse291a-sp26@googlegroups.com)

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
