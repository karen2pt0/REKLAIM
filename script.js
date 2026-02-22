document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 1s ease";
  });

  window.addEventListener("scroll", function() {
    sections.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if(position < window.innerHeight - 100) {
        section.style.opacity = 1;
      }
    });
  });
});
