$('.banner').ripples({
    dropRadius:30,
    perturbance: 0.2,
    resolution:256
});

const scroll = {
    init : function(){
        this.clickScroll()
    },
    clickScroll : () =>{
        const button = document.querySelector('.scroll');
        window.addEventListener('scroll' , () =>{
            if(window.scrollY >500){
                button.style.display ='flex'
            }
            else{
                button.style.display ='none'
            }
        })
        button.addEventListener('click', () =>{
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    }
}
const header = {
    init : function() {
        this.scrollHeader()
    },
    scrollHeader : () =>{
        const header = document.querySelector('.header')
        const button = document.querySelector('.header__button');
        window.addEventListener('scroll' , () =>{
            if(window.scrollY >70){
                header.classList.add('header--active');
                button.style.color ='#111111';
            }
            else{
                header.classList.remove('header--active');
                button.style.color ='#ffffff';
            }
        })
    }
} 
const navbarMobile = {
    init: function() {
        this.toggleNavbar()
    },
    toggleNavbar : () =>{
        const button = document.querySelector('.header__button');
        const navbar = document.querySelector('.header__navbar');

        button.addEventListener('click', () =>{
            navbar.classList.toggle('header__navbar--active')
            console.log("ok");
        })
    }
}
scroll.init()
header.init()
navbarMobile.init()