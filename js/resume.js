let tab = document.querySelectorAll('.tab');
let page = document.querySelectorAll('.skill-page');
let num = 1;


function pageSet(value){



    page.forEach(element => {
        element.setAttribute('style', 'z-index: 0;');
    });
    tab.forEach(element => {
        
        element.style.border = "none"
        element.style.color = '#000';
    });

    

    switch(value.innerHTML){



        case 'Unit 1-10':

            page[0].setAttribute('style', 'z-index:' + num + ';');
            tab[0].style.border = '2px solid';
            tab[0].style.color = '#3366cc';
            
            break;
            
        case 'Unit 11-20':
            page[1].setAttribute('style', 'z-index:' + num + ';');
            tab[1].style.border = '2px solid';
            tab[1].style.color = '#3366cc';
            break;
            
        case 'Unit 21-30':
            page[2].setAttribute('style', 'z-index:' + num + ';');
            tab[2].style.border = '2px solid';
            tab[2].style.color = '#3366cc';
            break;
            
        case 'Unit 31-40':
            page[3].setAttribute('style', 'z-index:' + num + ';');
            tab[3].style.border = '2px solid';
            tab[3].style.color = '#3366cc';
            break;

    }

}
tab.forEach(element => {
    element.addEventListener('click', function(event){

        pageSet(event.target);
    });
});




