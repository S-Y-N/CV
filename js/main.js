let mixerProjects = mixitup('.project__content', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300
    }
});
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active__btn'));
    this.classList.add('active__btn');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

//scroll to top 
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function() {
      // Показывать или скрывать кнопку в зависимости от прокрутки
      if (window.scrollY> 20 * window.innerHeight / 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", function() {
      // Прокрутить страницу наверх при нажатии на кнопку
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });

  //burger
  $(document).ready(function (){
    let navBtn = $('.nav-icon-btn');
    let navIcon = $('.nav-icon');
    let nav =  $('.header__top');
    let hb = $('.header__bottom');

  
    navBtn.click(function (){
        navIcon.toggleClass('nav-icon--active');
        nav.toggleClass('header__top--mobile');
        hb.toggleClass('header__bt-pt');
    });
    $(document).click(function(event){
      let isInside = $(event.target).closest(nav).length > 0 || $(event.target).closest(navBtn).length > 0;
      if (!isInside && nav.hasClass('header__top--mobile')) {
        nav.removeClass('header__top--mobile');
        navIcon.removeClass('nav-icon--active');
        hb.removeClass('header__bt-pt');
      }
    });
  });


