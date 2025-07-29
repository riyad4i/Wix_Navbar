document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
  const content = dropdown.querySelector('.dropdown-content');
  let timeout;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    dropdown.classList.add('active');
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('active');
    }, 400);
  });

  // Close dropdown on link click
  if (content) {
    content.querySelectorAll('.dropdown-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // prevent jumping to #
        dropdown.classList.remove('active');
      });
    });
  }
});

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

// Mobile dropdown toggles
document.querySelectorAll('.mobile-dropdown .dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parent = toggle.closest('.mobile-dropdown');
    parent.classList.toggle('open');
  });
});
