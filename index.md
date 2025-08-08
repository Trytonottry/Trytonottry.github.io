---
layout: default
title: Home
---

# 👋 Привет, я Семён

**Кибербезопасник | Разработчик | Исследователь**

![Profile]({{ '/assets/images/avatar.png' | relative_url }}){: width="200"}

## 🎯 Что я делаю
- Разрабатываю **защищённые ОС** для RISC-V
- Создаю **инструменты для IoT-безопасности**
- Исследую **dark web утечки**

## 📊 GitHub Stats
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=Trytonottry&show_icons=true&theme=radical)

## 🚀 Последние проекты
{% for repo in site.github.public_repositories limit:10 %}
  [{{ repo.name }}]({{ repo.html_url }}) - {{ repo.description }}
{% endfor %}
