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

    

    switch(value.innerHTML){



        case 'ux design':

            page[0].setAttribute('style', 'z-index:' + num + ';');
            tab[0].style.backgroundColor = '#ebebeb';
            tab[0].style.color = '#000';

            break;
        case 'digital layout':
            page[1].setAttribute('style', 'z-index:' + num + ';');
            tab[1].style.backgroundColor = '#ebebeb';
            tab[1].style.color = '#000';
            break;
        case 'html':
            page[2].setAttribute('style', 'z-index:' + num + ';');
            tab[2].style.backgroundColor = '#ebebeb';
            tab[2].style.color = '#000';
            break;
        case 'css':
            page[3].setAttribute('style', 'z-index:' + num + ';');
            tab[3].style.backgroundColor = '#ebebeb';
            tab[3].style.color = '#000';
            break;
        case 'javascript':
            page[4].setAttribute('style', 'z-index:' + num + ';');
            tab[4].style.backgroundColor = '#ebebeb';
            tab[4].style.color = '#000';
            break;

    }


}
tab.forEach(element => {
    element.addEventListener('click', function(event){

        pageSet(event.target);
    });
});




