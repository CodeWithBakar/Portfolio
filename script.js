$(document).ready(function () {
  // --- Particle.js Hero Section ---
  if ($("#particles-js").length) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  }
  // --- AOS Animation Initialization ---
  AOS.init({
    duration: 1000,
    once: true,
  });

  // --- Navbar Sticky, Scroll-Up Button ---
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

    // --- Active Nav Link on Scroll ---
    let scrollY = window.pageYOffset;
    $("section, .timeline-section").each(function () {
      let sectionHeight = $(this).height();
      let sectionTop = $(this).offset().top - 100;
      let sectionId = $(this).attr("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        $(".navbar .menu a[href*=" + sectionId + "]").addClass("active");
      } else {
        $(".navbar .menu a[href*=" + sectionId + "]").removeClass("active");
      }
    });
  });

  // --- Scroll-Up Button Click ---
  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  });

  // --- Theme Toggler ---
  const themeSwitcher = $(".theme-switcher .toggle-button");
  const body = $("body");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    body.addClass("dark-mode");
  }

  themeSwitcher.click(function () {
    body.toggleClass("dark-mode");
    if (body.hasClass("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // --- Toggle Menu/Navbar Script ---
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // --- Close menu on link click and set active state ---
  $(".navbar .menu a").click(function () {
    $(".navbar .menu").removeClass("active");
    $(".menu-btn i").removeClass("active");

    $(".navbar .menu a").removeClass("active");
    $(this).addClass("active");
  });

  // --- Typing Text Animation Script ---
  new Typed(".typing", {
    strings: [
      "Full-stack Engineer",
      "AI/ML Specialist",
      "Web Developer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing-2", {
    strings: [
      "Full-stack Engineer",
      "AI/ML Specialist",
      "Web Developer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // --- Download Resume Button Loader ---
  $("#resume-btn").on("click", function () {
    var btn = $(this);
    if (btn.hasClass("disabled")) {
      return;
    }
    var originalText = btn.html();

    btn.html('<i class="fas fa-spinner fa-spin"></i> Downloading...');
    btn.addClass("disabled");

    setTimeout(function () {
      btn.html(originalText);
      btn.removeClass("disabled");
    }, 4000);
  });
});
