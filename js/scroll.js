
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



function titleAnimation(event){
    "use strict"

    if(window.pageYOffset > section.offsetHeight +300){
        gsap.to(tab, {
            duration:0.5, x:0, margin:0, stagger:0.1,
        });
        gsap.to('.semester1', {
            duration:0.5, fontSize: 15, stagger:0.1, ease:"expo",
        });

    }


//    gsap.to(".flex-project", {
//        duration:0.5, height: 600 - window.scrollY/10,  
//    });
    gsap.to(".parallax", {
        duration:0.5, y: window.scrollY/10, ease:"expo",
    });

    gsap.to(".table-of-content", {
        //             duration:0.5,  y: -window.scrollY/20,ease:"expo",
    });

    gsap.to("#resume h2", {
//        duration:0.5,  y: window.scrollY/20, ease:"expo",
    });
    gsap.to(".table-of-content", {
        duration:0.5,  y:0,ease:"expo",
    });
    gsap.to(".project-container", {
        duration:0.5,  y: window.scrollY/20,ease:"bounce",
    });

}


function scrollTracker(event){
    "use strict"
    if(window.pageYOffset < section.offsetHeight){
        Tracker.innerHTML = 'about';
        menu.children[0].style.color = '#3366cc';
        menu.children[1].style.color = '#003366';
        menu.children[2].style.color = '#003366';
        menu.children[3].style.color = '#003366';

    }else if(window.pageYOffset > section.offsetHeight -20 && window.pageYOffset < section.offsetHeight   *2 -20 ) {
        Tracker.innerHTML = 'potfolio';
        menu.children[0].style.color = '#003366';
        menu.children[1].style.color = '#3366cc';
        menu.children[2].style.color = '#003366';
        menu.children[3].style.color = '#003366';


    }else if(window.pageYOffset > section.offsetHeight && window.pageYOffset < section.offsetHeight  *3){
        Tracker.innerHTML = 'resume';
        menu.children[0].style.color = '#003366';
        menu.children[1].style.color = '#003366';
        menu.children[2].style.color = '#3366cc';
        menu.children[3].style.color = '#003366';
    }else if(window.pageYOffset > section.offsetHeight && window.pageYOffset < section.offsetHeight *4){
        Tracker.innerHTML = 'contact';
        menu.children[0].style.color = '#003366';
        menu.children[1].style.color = '#003366';
        menu.children[2].style.color = '#003366';
        menu.children[3].style.color = '#3366cc';

    }


}

function menuTracker(value){
    "use strict";
   

    switch(value.innerHTML){
        case 'About':
             
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });

            break;
        case 'Portfolio':

            window.scroll({
                top: section.offsetHeight  ,
                left: 0,
                behavior: 'smooth'
            });




            break;

        case 'Resume':
            window.scroll({
                top: section.offsetHeight *2 + 10,
                left: 0,
                behavior: 'smooth'
            });
            break;
        case 'Contact':
            window.scroll({
                top: section.offsetHeight *3,
                left: 0,
                behavior: 'smooth'
            });


    }

    Tracker.innerHTML = value.innerHTML;


}

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
    Tracker.innerHTML = 'about';

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
}


window.onscroll = function() {

    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        if(currentScroll > section.offsetHeight -10){

            gsap.to(navigationBar, {
                duration:1, top: '-10rem', delay:0,ease:'elastic',
            });       
        }
    }else{
        lastScroll = currentScroll;
        if(currentScroll){
            navigationBar.style.position = 'fixed';
        }else{
            navigationBar.style.position = 'absolute';
        }

        gsap.to(navigationBar, {
            duration:1, top: '0rem', delay:0,ease:'elastic',
        });        
    }
};

window.onload = function(event){
    init();
}