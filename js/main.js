const nav_btn = document.querySelector('.header-nav-btn');
var header_nav = document.querySelector('.header-nav__list-mobile');

nav_btn.addEventListener('click',function(){

    header_nav.classList.toggle('open');
})

function hide_header()
{
    header_nav.classList.toggle('open');
}