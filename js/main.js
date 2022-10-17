/*=============== SHOW MENU ===============*/
let barsIcon=document.querySelector('.icons .bars');
let menu=document.querySelector('.nav');
let closeMenu=document.querySelector('.nav .close-menu')
barsIcon.onclick=(e)=>{
    menu.classList.add('active')
    //Close Swither
    swither.classList.remove('active')
}
// CLose Cart 
closeMenu.onclick=()=>{
    menu.classList.remove('active')
}

/*=============== SHOW CART ===============*/
let cartIcon=document.querySelector('.icons .cart');
let cartSection=document.querySelector('.cart-section');
let closeCartsection=document.querySelector('.close-cart')
cartIcon.onclick=()=>{
    cartSection.classList.add('active')
    //Close Swither
    swither.classList.remove('active')
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
    //Close Swither
    swither.classList.remove('active')
}

//Close Cart
closeLoginsection.onclick=()=>{
    loginSection.classList.remove('active')
}




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
let scrollUp=document.querySelector('.scroll-up');
addEventListener('scroll',()=>{
    if(this.scrollY>200){
        scrollUp.classList.add('active');
    }else{
        scrollUp.classList.remove('active');
    }
})
scrollUp.addEventListener('click',()=>{
    scrollTo(0,0)
})

/*=============== LIGHT BOX ===============*/
/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/
let colorStyle=document.querySelector('.color-style')
let swither=document.querySelector('.swither');
let gear=document.querySelector('.gear');
let allColor=document.querySelectorAll('.color'); 

gear.addEventListener('click',()=>{
    swither.classList.toggle('active')
})
addEventListener('scroll',()=>{
    swither.classList.remove('active')
})

allColor.forEach((e)=>{
    e.addEventListener('click',()=>{
        allColor.forEach(e=>{
            e.classList.remove('active','fa-check')
        })
        e.classList.add('active','fa-check');
        localStorage.setItem('color',e.getAttribute('data-color'));
        setColor(e);
    })
})

function setColor(e){
    let path=colorStyle.getAttribute('href').split('/');
    path=path.slice(0,path.length-1);
    colorStyle.setAttribute('href',`${path.join('/')}/${e.getAttribute('data-color')}.css`)
}
addEventListener('load',()=>{
    if(localStorage.getItem('color')){
        allColor.forEach((e,i)=>{
            if(localStorage.getItem('color')==e.getAttribute('data-color')){
                allColor.forEach((e)=>e.classList.remove('active','fa-check'));
                e.classList.add('active','fa-check');
                setColor(e);
            }
        })
    }else{
        allColor[0].classList.add('active');
        setColor(allColor[0]);
    }
})