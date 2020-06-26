


let U = {
    $: function (id) {
        if (typeof (id) == "string") {
            return document.getElementById(id);
        }
    },
    addEvent: function (obj, type, fn) {
        'use strict';
        if (obj && obj.addEventListener) { // W3C
            obj.addEventListener(type, fn, false);
        } else if (obj && obj.attachEvent) { // Older IE
            obj.attachEvent('on' + type, fn);
        }
    },
}

let form = U.$("form");
let name = U.$("name");
let email = U.$("email");
let term = U.$("term");
let submitButton = U.$("submit-form");
let error = false;


if(term.checked){
    submitButton.disabled = false;
}
function validationMarck(s, value, color) {
    "use strict";
    if (value == "name") {
        let msg = U.$('n-msg');
        msg.innerText = s;
        msg.style.color = color;
        
    }else if (value == "email"){
        let msg = U.$('e-msg');
        msg.innerText = s;
        msg.style.color = color;

    }
}

function submitionAbilitated() {
     "use strict";
    submitButton.disabled = false;
    
}
function submition(e){
     "use strict";
   if (validateName() == false && validateEmail() == false){
    term.checked = false;
   }else{
    e.preventDefault();
   } 
}
function validateName() {
     "use strict";
    if (/^[A-Z \.\-']{2,20}$/i.test(name.value)) {
        name.style.border = "1px solid green";
        validationMarck('✔', 'name', 'green');
        error = false;
    } else {
        name.style.border = "1px solid red";
        validationMarck('✘', 'name', 'red');
        error = true;
    }
    return error;
}
function validateEmail() {
     "use strict";
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
        email.style.border = "1px solid green";
        validationMarck('✔', 'email', "green");
        error = false;
    } else {
        email.style.border = "1px solid red";
        validationMarck('✘', 'email', "red");
        error = true;
    }
    return error;

}
function formInit(){
    // form initialization
     submitButton.disabled = true;
     U.addEvent(term, "change", submitionAbilitated);
     U.addEvent(name, "input", validateName);
     U.addEvent(email, "input", validateEmail);
     U.addEvent(form, "submit", function(e){
        submition(e);
       
     })
}
