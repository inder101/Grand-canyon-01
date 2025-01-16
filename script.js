// Simple fade-in effect for the sections
window.onload = () => {
  const sections = document.querySelectorAll('section, footer');
  sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transition = "opacity 1s";
  });

  setTimeout(() => {
      sections.forEach(section => {
          section.style.opacity = 1;
      });
  }, 100);
};
