(function () {
  "use strict";

  function initialiseHybridNavigation() {
    const drawer = document.querySelector('[data-md-toggle="drawer"]');
    const scrollwrap = document.querySelector(
      ".md-sidebar--primary .md-sidebar__scrollwrap"
    );

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
