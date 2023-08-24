// Инициализация слайдера и назначение стандартных параметров
new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 1500,
    effect: 'slide',
    autoplay: {
    delay: 4000,
    disableOnInteraction: true
      },
    });

// функция для отображения мобильного меню
function toggleMobileMenu() {
  var x = document.getElementsByClassName('mobile-menu')[0];
    console.log(x);
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

// плавный скролл
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1300, function(){
   
        window.location.hash = hash;
      });
    }
  });
});

// фиксированная шапка
window.onscroll = function() {stickHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickHeader() {
  if (window.pageYOffset > sticky && screen.width < 767) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// открытие и закрытие попапов
function openForm() {
  document.getElementById("popup_form").style.display = "block";
}

function closeForm() {
  document.getElementById("popup_form").style.display = "none";
}

// маска для телефона при помощи imaskjs
const element = document.getElementById('phone_input');
const maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false, 
    placeholderChar: '_'
};
const mask = IMask(element, maskOptions);


function closeMobileMenu(){
    var element = document.getElementsByClassName("mobile-menu")[0];
    console.log(element);
    if (element.style.display==="block"){
        element.style.display="none";
    }
}