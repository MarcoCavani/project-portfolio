let boxes = document.querySelectorAll('.boxes');
boxes.forEach(element => {
    
    element.addEventListener('click', function(event){
         window.scroll({
                top: section.offsetHeight  ,
                left: 0,
                behavior: 'smooth'
            });
    })  
});  