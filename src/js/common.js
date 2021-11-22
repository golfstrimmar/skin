// import $ from "jquery";
// import Plyr from "plyr";
// ------------------------------------------------



// $(window).on("load", function() {
//     $(".cssload").delay(200).fadeOut("slow");
// });

// $(document).ready(function (e) {
//     $("input").on("blur", function () {
//         $(this).next("i").css("opacity", "0")
//     });
//     });


[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
  });

  

