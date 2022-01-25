
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 1200,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

let sideNav = document.querySelector('#sidenav');
let menuBar = document.querySelector('#menubar');

sideNav.style.width="0px";
menuBar.onclick=function(){
    if(sideNav.style.width == "0px"){
        sideNav.style.width="250px";
    } else{
        sideNav.style.width="0px";
    }
}
