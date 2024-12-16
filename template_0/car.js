const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
// Set dynamic year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  // Smooth scroll for links
  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
const tabs = document.querySelectorAll('.tab');
const carContainers = document.querySelectorAll('.car-container');

// Add event listeners to tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Hide all car containers
    carContainers.forEach(container => container.classList.add('hidden'));

    // Show the selected car container
    const company = tab.getAttribute('data-company');
    document
      .querySelector(`.car-container[data-company="${company}"]`)
      .classList.remove('hidden');
  });
});
