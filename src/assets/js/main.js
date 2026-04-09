// Mobile nav toggle with unfurl animation
document.querySelectorAll('[data-collapse-toggle]').forEach(button => {
  const target = document.getElementById(button.getAttribute('data-collapse-toggle'));
  if (!target) return;

  // Start collapsed
  target.style.maxHeight = '0';
  target.style.overflow = 'hidden';
  target.style.transition = 'max-height 0.35s ease';
  target.classList.remove('hidden');

  let open = false;

  button.addEventListener('click', () => {
    if (open) {
      target.style.maxHeight = '0';
    } else {
      target.style.maxHeight = target.scrollHeight + 'px';
    }
    open = !open;
  });
});
