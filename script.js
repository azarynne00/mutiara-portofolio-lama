// ========================================
// PORTFOLIO - SCRIPT.JS
// ========================================

document.addEventListener("DOMContentLoaded", function () {

  // ========================================
  // 1. NAVBAR - CLOSE MENU AFTER CLICK
  // ========================================

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Menutup menu navbar pada tampilan mobile
      if (
        navbarCollapse &&
        navbarCollapse.classList.contains("show")
      ) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });


  // ========================================
  // 2. SMOOTH SCROLL
  // ========================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      // Abaikan jika href hanya "#"
      if (targetId === "#") {
        return;
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();

        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // ========================================
  // 3. NAVBAR ACTIVE LINK
  // ========================================

  const sections = document.querySelectorAll("section[id]");
  const navigationLinks = document.querySelectorAll(
    '.navbar-nav a[href^="#"]'
  );

  function updateActiveNav() {
    let currentSection = "";

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navigationLinks.forEach(function (link) {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + currentSection) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);

  updateActiveNav();


  // ========================================
  // 4. POLAROID IMAGE HOVER EFFECT
  // ========================================

  const polaroids = document.querySelectorAll(".polaroid-container");

  polaroids.forEach(function (polaroid) {
    polaroid.addEventListener("mouseenter", function () {
      this.style.zIndex = "10";
    });

    polaroid.addEventListener("mouseleave", function () {
      this.style.zIndex = "";
    });
  });


  // ========================================
  // 5. CONTACT BUTTON
  // ========================================

  const contactLinks = document.querySelectorAll(
    'a[href^="mailto:"], a[href^="https://wa.me/"]'
  );

  contactLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Contact link clicked:", this.href);
    });
  });


  // ========================================
  // 6. FADE-IN ANIMATION SAAT SCROLL
  // ========================================

  const animatedElements = document.querySelectorAll(
    ".card-notebook, .polaroid-container, .section-title-creative"
  );

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedElements.forEach(function (element) {
    element.classList.add("fade-in");
    observer.observe(element);
  });


  // ========================================
  // 7. CONSOLE MESSAGE
  // ========================================

  console.log("Portfolio berhasil dimuat!");
});