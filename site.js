// No analytics, storage, network requests or automatic media playback.
document.querySelectorAll('[data-print]').forEach(button => {
  button.addEventListener('click', () => window.print());
});
