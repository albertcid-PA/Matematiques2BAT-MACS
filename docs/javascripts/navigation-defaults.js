(function () {
  "use strict";

  function openAlgebraLab() {
    const toggle = document.getElementById("__nav_3_5");
    if (toggle) toggle.checked = true;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openAlgebraLab, { once: true });
  } else {
    openAlgebraLab();
  }

}());
