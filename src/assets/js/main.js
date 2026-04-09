// FAQ Accordion
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const answer = item.querySelector('.accordion-answer');
    const chevron = trigger.querySelector('.accordion-chevron');
    const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';

    // Close all others
    document.querySelectorAll('.accordion-item').forEach(other => {
      other.querySelector('.accordion-answer').style.maxHeight = '0';
      other.querySelector('.accordion-chevron').style.transform = '';
    });

    // Toggle clicked
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      chevron.style.transform = 'rotate(180deg)';
    }
  });
});

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));

// Stagger children inside .stagger-children
document.querySelectorAll('.stagger-children').forEach(parent => {
  [...parent.children].forEach((child, i) => {
    child.classList.add('fade-up');
    child.style.transitionDelay = `${i * 100}ms`;
    observer.observe(child);
  });
});

// Mobile nav toggle with unfurl animation
document.querySelectorAll('[data-collapse-toggle]').forEach(button => {
  const target = document.getElementById(button.getAttribute('data-collapse-toggle'));
  if (!target) return;

  let open = false;

  const initMobile = () => {
    if (window.innerWidth < 768) {
      // Remove Tailwind's hidden class — we control visibility via max-height
      target.classList.remove('hidden');
      target.style.maxHeight = open ? target.scrollHeight + 'px' : '0';
      target.style.overflow = 'hidden';
      target.style.transition = 'max-height 0.35s ease';
    } else {
      // Restore Tailwind control on desktop
      target.classList.remove('hidden');
      target.style.maxHeight = '';
      target.style.overflow = '';
      target.style.transition = '';
    }
  };

  initMobile();

  button.addEventListener('click', () => {
    if (window.innerWidth >= 768) return;
    open = !open;
    target.style.maxHeight = open ? target.scrollHeight + 'px' : '0';
  });

  window.addEventListener('resize', initMobile);
});
