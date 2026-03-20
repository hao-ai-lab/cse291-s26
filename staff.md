---
layout: page
title: Staff
lang_ref: staff
description: DSC 291 Spring 2026 Staff
---

# Staff

## Instructor

{% assign staffers = site.staffers | where: 'lang', page.lang %}
{% assign instructors = staffers | where: 'role', 'Instructor' %}

<div class="role flex">
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}
</div>

<!-- ## Lead GSIs

_All office hours are held in-person in Warren 101 unless otherwise specified_

{% assign leads = site.staffers | where: 'role', '20-hour Lead uGSI (UCS2)' %}

<div class="role flex">
{% for staffer in leads %}
{{ staffer }}
{% endfor %}
</div> -->

## Teaching Assistants

<!-- _All office hours are held in-person in Warren 101 unless otherwise specified_ -->

{% assign teaching_assistants = staffers | where: 'role', 'Teach Assistant' %}

<div class="role flex">
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
</div>

<!-- ## Tutors

{% assign tutors = site.staffers | where: 'role', 'Tutor (UCS1)' %}

<div class="role flex">
{% for staffer in tutors %}
{{ staffer }}
{% endfor %}
</div>  -->
