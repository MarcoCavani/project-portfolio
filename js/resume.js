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



        case 'ux design':

            portfolioActive(0);

            break;
        case 'digital layout':
             portfolioActive(1);
            break;
        case 'html':
             portfolioActive(2);
            break;
        case 'css':
             portfolioActive(3);
            break;
        case 'javascript':
             portfolioActive(4);
            break;
            
        case 'PHP':
            alert('hshshhs');

    }


}
tab.forEach(element => {
    element.addEventListener('click', function(event){

        pageSet(event.target);
    });
});




