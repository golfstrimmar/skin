(function () {
  "use strict";

  var upDownBtn = document.querySelector(".up_down_btn");
  var check;

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = 200;

    if (scrolled > coords) {
      upDownBtn.classList.add("up_down_btn-show");
      upDownBtn.innerHTML = "&uarr;";
      upDownBtn.setAttribute("title", "Наверх");
      check = false;
    }
    if (scrolled < coords) {
      upDownBtn.innerHTML = "&darr;";
      upDownBtn.setAttribute("title", "Вниз");
      check = true;
    }
  }

  function backToTop() {
    upDownBtn.classList.add("up_down_btn-disabled");
    if (!check) {
      (function goTop() {
        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -15);
          setTimeout(goTop, 0);
        } else {
          upDownBtn.classList.remove("up_down_btn-disabled");
        }
      })();
      return;
    } else if (check) {
      (function goBottom() {
        var match = Math.ceil(
          window.pageYOffset + document.documentElement.clientHeight
        );

        if (match != document.documentElement.scrollHeight) {
          window.scrollBy(0, 15);
          setTimeout(goBottom, 0);
        } else {
          upDownBtn.classList.remove("up_down_btn-disabled");
        }
      })();
      return;
    }
  }

  window.addEventListener("scroll", trackScroll);
  upDownBtn.addEventListener("click", backToTop);
})();
