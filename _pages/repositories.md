---
layout: page
permalink: /repositories/
title: Code
description: Open-source research code and selected repositories.
nav: false
nav_order: 3
---

{% if site.data.repositories.github_users %}

## GitHub profile

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% assign stats_url = site.external_services.github_readme_stats_url | default: 'https://github-stats-extended.vercel.app' %}
  {% assign stats_locale = site.lang | split: '-' | first %}
  {% for user in site.data.repositories.github_users %}
    <div class="repo p-2 text-center">
      <a href="https://github.com/{{ user }}">
        <img
          class="only-light w-100"
          alt="{{ user }}"
          src="{{ stats_url }}/api/?username={{ user }}&theme={{ site.repo_theme_light }}&locale={{ stats_locale }}&show_icons=true&hide_rank=true"
          onerror="this.closest('.repo').style.display='none'"
        >
        <img
          class="only-dark w-100"
          alt="{{ user }}"
          src="{{ stats_url }}/api/?username={{ user }}&theme={{ site.repo_theme_dark }}&locale={{ stats_locale }}&show_icons=true&hide_rank=true"
          onerror="this.closest('.repo').style.display='none'"
        >
      </a>
    </div>
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## Selected repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
