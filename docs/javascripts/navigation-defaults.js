(function () {
  "use strict";

  const mobileNavigation = window.matchMedia("(max-width: 76.234375em)");

  function openAlgebraLab() {
    if (!mobileNavigation.matches) return;
    const toggle = document.getElementById("__nav_3_5");
    if (toggle) toggle.checked = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openAlgebraLab, { once: true });
  } else {
    openAlgebraLab();
  }

  mobileNavigation.addEventListener("change", openAlgebraLab);
}());
