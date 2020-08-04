
let unitComponent = {BSBWHS304: "This unit describes the skills and knowledge required to participate in work health and safety (WHS) communication and consultation processes.", ICTICT401: "This unit describes the skills and knowledge required to determine client business system requirements and verify the accuracy of the information gathered.It applies to information and communications technology (ICT) personnel who are required to analyse client expectations and needs, and recommend business system changes."}

let info = document.querySelectorAll('.fa-info-circle');
let modal = document.querySelector('#modal');
let close = document.querySelector('.modal-x');

let infoTitle = document.querySelector('.tafe-unit-number');
let infoContent = document.querySelector('#modal p');


function openModal(){
 modal.style.display = "block";
}
function closeModalInfo(){
   modal.style.display = "none"; 
}

function modalContent(unit){
    openModal();
    switch(unit){
            
        case "BSBWHS304":
            infoTitle.innerHTML = unit;
            infoContent.innerHTML = unitComponent.BSBWHS304;
            
            break;

        case "ICTICT401":
            infoTitle.innerHTML = unit;
            infoContent.innerHTML = unitComponent.ICTICT401;
            
            break;
    }
}

//get the value of the unit number
function getInfo(event){

    let unitNumber = event.target.getAttribute("value")
    console.log(unitNumber);
    modalContent(unitNumber);

}




//add event listner to info icons
info.forEach(element => {
    element.addEventListener('click', function(event){getInfo(event)});
})

close.addEventListener('click', function(){closeModalInfo()});

//close modal when user click outside of the box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

