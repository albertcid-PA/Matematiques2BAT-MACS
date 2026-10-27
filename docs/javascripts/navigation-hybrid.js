(function () {
  "use strict";

  function initialiseHybridNavigation() {
    const drawer = document.querySelector('[data-md-toggle="drawer"]');
    const scrollwrap = document.querySelector(
      ".md-sidebar--primary .md-sidebar__scrollwrap"
    );

    document
      .querySelectorAll(
        ".md-nav__item--section > .md-nav__container > a .md-ellipsis"
      )
      .forEach(function (title) {
        if (/^\d+\.\s/.test(title.textContent.trim())) {
          title.classList.add("nav-topic-title");
        }
      });

    if (!drawer || !scrollwrap) return;

    drawer.addEventListener("change", function () {
      if (drawer.checked) scrollwrap.scrollTop = 0;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseHybridNavigation, {
      once: true,
    });
  } else {
    initialiseHybridNavigation();
  }
})();
