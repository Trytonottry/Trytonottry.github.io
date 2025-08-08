const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.dataset.theme === 'light' ? 'dark' : 'light';
  html.dataset.theme = next;
  localStorage.setItem('theme', next);
});