$(document).ready(function () {
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
    $("section").each(function () {
      let sectionHeight = $(this).height();
      let sectionTop = $(this).offset().top - 50;
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
    // Prevent action if already downloading
    if (btn.hasClass("disabled")) {
      return;
    }
    var originalText = btn.html();

    btn.html('<i class="fas fa-spinner fa-spin"></i> Downloading...');
    btn.addClass("disabled");

    // Revert button state after 4 seconds
    setTimeout(function () {
      btn.html(originalText);
      btn.removeClass("disabled");
    }, 4000);
  });
});
