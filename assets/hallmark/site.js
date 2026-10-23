(() => {
  const disclosure = document.querySelector('.contents');
  if (!disclosure) return;
  const compact = matchMedia('(max-width: 960px)');
  const resize = () => { disclosure.open = !compact.matches; };
  resize();
  compact.addEventListener('change', resize);
  disclosure.addEventListener('click', event => {
    if (compact.matches && event.target.closest('.toc a')) disclosure.open = false;
  });
})();
