window.addEventListener('scroll', function() {
  if(pageYOffset > 0){
    var header = document.querySelector(`.header`);
    header.classList.add('fixed');
  }
  if (pageYOffset == 0) {
    var header = document.querySelector(`.header`);
    header.classList.remove('fixed');
  }
});

var burger_btn = document.querySelector(`.burger__btn`);
var close_burger_btn = document.querySelector(`.burger__close__btn`);

  burger_btn.addEventListener("click", function(){
  var responsive_menu = document.querySelector(`.responsive__menu`);
  responsive_menu.classList.toggle('active');
});

close_burger_btn.addEventListener("click", function(){
var responsive_menu = document.querySelector(`.responsive__menu`);
responsive_menu.classList.toggle('active');
});
