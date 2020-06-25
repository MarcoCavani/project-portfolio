
//the switcher is to define the menú status. 
let switcher;
let nav = document.querySelector('nav #navigation-phone');
let menu = document.querySelector('.menu');
let menuPhone = document.querySelector('.phone');//container
let social = document.querySelector('.icons')
let hamburger = document.querySelector('.hamburger');
let Tracker = document.querySelector('.tracker');
let list = document.querySelector('.list')
let a = document.querySelector('a');
let section = document.querySelector('section');
let menuS = document.querySelector('.munuSmall');
let navigationBar = document.querySelector('#navigation');
let lastScroll = 0;
let pageTitlePortfolio = document.querySelector('#portfolio h2');
let pageTitleContact = document.querySelector('#contact h2');
let pageTitleResume = document.querySelector('#resume h2');






//openeMenu function animate the menu
function openMenu(){
    "use strict";

    if(switcher === undefined){
        switcher = true;
    }

    if(switcher){

        gsap.to(menuPhone, {
            duration: 0, display: 'none', paddingTop: 100, delay: 0.5
        });
        gsap.to('.munuSmall', {
            duration: 0, display: 'none', delay: 0.5
        });

        gsap.to(menuPhone, {
            duration: 0.4, height: '0vh', delay: 0.4, ease:'expo' 
        });
        gsap.to(menuS.children, {
            duration: 0.4, opacity: 0, delay:0, stagger: 0
        }) ;     
        gsap.to('.social', {display: 'none', delay: 0});
    }
    else{
        gsap.to(menuPhone, {
            duration: 0, display: 'block', paddingTop: 100, delay:0, ease: 'expo'
        });
        gsap.to('.munuSmall', {
            duration: 0, display: 'block', delay: 0.5
        });
        gsap.to(menuPhone, {
            duration: 0.4, height: '100vh', delay: 0, ease:'expo' 
        });
        gsap.to(menuS.children, {
            duration: 0.4, opacity: 1, delay:0.3, stagger: 0.1
        });

        gsap.to('.social', {display: 'block', delay:0.5});



    }


}



// this function set the switcher and call open menu function 
function menuActive(){
    "use strict";

    if(switcher == undefined){
        switcher = true;
    }

    if (switcher){
        gsap.to(hamburger.children[1], {
            duration: 0.3, opacity: 0, 
        });
        gsap.to(hamburger.children[2], {
            duration: 0.3, rotation: 45, transformOrigin: '2rem',
        });
        gsap.to(hamburger.children[0], {
            duration: 0.3, rotation: -45, transformOrigin: '2.5rem',
        });
        switcher = false;

    }else{
        gsap.to(hamburger.children[1], {
            duration: 0.3, opacity: 1, 
        });
        gsap.to(hamburger.children[2], {
            duration: 0.3, rotation: 0, transformOrigin: 'bottom right',
        });
        gsap.to(hamburger.children[0], {
            duration: 0.3, rotation: 0, transformOrigin: 'top right',
        });
        switcher = true;

    }
    openMenu();
}



function init(){


    "use strict";
    

    hamburger.addEventListener('click', function(){
        menuActive();
        openMenu();

    });


    window.addEventListener('scroll', function(event){
        scrollTracker(event);
        titleAnimation(event);


    });

    for(var i = 0; menu.childElementCount - 1 > i; i++){

        menuS.children[i].addEventListener('click', function(event){   
            menuTracker(event.target);
            menuActive(switcher = false);
        });
        menu.children[i].addEventListener('click', function(event){
            menuTracker(event.target);
        });

    }
// form initialization
     submitButton.disabled = true;
     U.addEvent(term, "change", submitionAbilitated);
     U.addEvent(name, "input", validateName);
     U.addEvent(email, "input", validateEmail);
     U.addEvent(form, "submit", function(e){
        submition(e);
       
     })


}


window.onload = function(event){
    
    init();
}