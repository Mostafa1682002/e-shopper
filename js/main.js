/*=============== SHOW MENU ===============*/
let barsIcon=document.querySelector('.icons .bars');
let menu=document.querySelector('.nav');
let closeMenu=document.querySelector('.nav .close-menu')
barsIcon.onclick=(e)=>{
    menu.classList.add('active')
}
// CLose Cart 
closeMenu.onclick=()=>{
    menu.classList.remove('active')
}

/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/
let cartIcon=document.querySelector('.icons .cart');
let cartSection=document.querySelector('.cart-section');
let closeCartsection=document.querySelector('.close-cart')
cartIcon.onclick=()=>{
    cartSection.classList.add('active')
    //Close Menu
    menu.classList.remove('active')
}

//Close Cart
closeCartsection.onclick=()=>{
    cartSection.classList.remove('active')
}
/*===== CART SHOW =====*/
/* Validate if constant exists */


/*===== CART HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW LOGIN ===============*/
let loginIcon=document.querySelector('.icons .login');
let loginSection=document.querySelector('.login-section');
let closeLoginsection=document.querySelector('.close-login')
loginIcon.onclick=()=>{
    loginSection.classList.add('active')
    //Close Menu
    menu.classList.remove('active')
    //Close Cart
    cartSection.classList.remove('active')
}

//Close Cart
closeLoginsection.onclick=()=>{
    loginSection.classList.remove('active')
}

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */


/*=============== HOME SWIPER ===============*/
let homeSwiper=new Swiper(".home-content ",{
    spaceBetween:30,
    loop:'true',
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
let haede=document.getElementById('header')
addEventListener('scroll',()=>{
    if(window.scrollY>=50){
        haede.classList.add('scroll')
    }else{
        haede.classList.remove('scroll')
    }
})

/*=============== NEW SWIPER ===============*/
var swiper = new Swiper(".new-Swip ", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
  });

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/