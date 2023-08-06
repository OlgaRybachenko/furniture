let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})
 

let links = document.querySelectorAll('.menu__item > a');
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
  }
}
let links2 = document.querySelectorAll('.header__title--link > a');
for (let i = 0; i < links2.length; i++) {
  links2[i].onclick = function () {
    document.getElementById(links2[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
  }
}