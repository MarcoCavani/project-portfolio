let tab = document.querySelectorAll('.tab');
let page = document.querySelectorAll('.skill-page');
let num = 1;


function pageSet(value){



    page.forEach(element => {
        element.setAttribute('style', 'z-index: 0;');
    });
    tab.forEach(element => {
        element.style.backgroundColor = '#3a76ed';
        element.style.color = '#ebebeb';
    });

    
    
    function portfolioActive(value){
            page[value].setAttribute('style', 'z-index:' + num + ';');
            tab[value].style.backgroundColor = '#ebebeb';
            tab[value].style.color = '#000';
    }

    switch(value.innerHTML){



        case 'UX Design':

            portfolioActive(0);

            break;
        case 'Digital Layout':
            portfolioActive(1);
            break;
        case 'HTML':
            portfolioActive(2);
            break;
        case 'CSS':
            portfolioActive(3);
            break;
        case 'Javascript':
            portfolioActive(4);
            break;
            
        case 'PHP':
            portfolioActive(5);

    }


}
tab.forEach(element => {
    element.addEventListener('click', function(event){

        pageSet(event.target);
    });
});




