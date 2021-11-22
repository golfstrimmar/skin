import $ from "jquery";
// ------------------------------------------------



// let Parent = document.querySelector('html');
// let singles = Array.from(document.getElementsByClassName('button-scroll'))
// singles.forEach((cell) => {
//     let id = cell.getAttribute("value")
//     let hiddenElement = document.querySelector(id);
//
//     function handleButtonClick() {
//         hiddenElement.scrollIntoView({block: 'start', behavior: 'smooth'});
//     }
//
//     cell.addEventListener('click', handleButtonClick);
// })










// --------------------------------------------------------------------------
 $(window).scroll(function () {
   var $section = $("section");

   $section.each(function (i, el) {

     var top = $(el).offset().top - 100;
     var bottom = top + $(el).height();
     var scroll = $(window).scrollTop();
     var id = $(el).attr("id");

     if (scroll > top && scroll < bottom) {
       $("a.menu__link").removeClass("menu__link--active");
       $("a.art_inner-vidget-item__link").removeClass("menu__link--active");
       $('a[rel="#' + id + '"').addClass("menu__link--active");

     }
   });
 });


$(".art_inner__vidget").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr("rel"),
    top = $(id).offset().top;
  $("a").removeClass("menu__link--active");
  $(this).addClass("menu__link--active");
  $("body,html").animate({ scrollTop: top - 80}, 800);
});


$(".menu__link").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr("rel"),
    top = $(id).offset().top;
 $("a").removeClass("menu__link--active");
  $(this).addClass("menu__link--active");
$('a[href="#' + id + '"').addClass("menu__link--active");
  $("body,html").animate({ scrollTop: top - 80}, 800);

 setTimeout(function () {
   $(".menu").removeClass("menu-active")
     .find(".header__info")
     .remove();
     $(".info").removeClass("info-active");
   $("body").removeClass("lock");
 }, 1000);


});




 