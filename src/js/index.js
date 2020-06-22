/* Here goes your JS code */
// Form handling
const showPopupButton = document.getElementById("show-popup-form");
const popup = document.getElementsByClassName("popup")[0];
const form = document.getElementsByClassName("popup-form")[0];
const closePopupButton = document.getElementsByClassName("close-popup-form")[0];

showPopupButton.onclick = function(){
    showPopupButton.style.display = "none";
    popup.style.display = "block";
}

closePopupButton.onclick = function(){
    showPopupButton.style.display = "block";
    popup.style.display = "none";
    form.reset();
}

// Form validation
const submitButton = document.getElementsByClassName("form-submit")[0];

submitButton.onclick = function(){
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;
    let agreementChecked = document.getElementById("agreement").checked;
    let alertMessage = document.getElementById("alert-message");
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (passwordValue == ""){
        alertMessage.parentElement.style.display = "block";
        alertMessage.innerHTML = "You forgot about your password.";

        if (emailValue == ""){
            alertMessage.innerHTML = "Fill all form fields.";
        }
    }
    else if (passwordValue.length < 8){
        alertMessage.parentElement.style.display = "block";
        alertMessage.innerHTML = "Password is too short.";
    }
    else if (regex.test(emailValue) == false){
        alertMessage.parentElement.style.display = "block";
        alertMessage.innerHTML = "There's problem with your e-mail.";
    }
    else if (agreementChecked == false){
        alertMessage.parentElement.style.display = "block";
        alertMessage.innerHTML = "Confirm agreements.";
    }
    // Show new message
    else {
        alertMessage.parentElement.style.display = "none";
        let timer = 3;

        function counter(){        
            submitButton.innerHTML = "Wait "+timer+" seconds...";   
            setTimeout(function(){   
                timer--;                    
                if (timer >= 0){           
                    counter();             
                }
                if (timer==0){
                    popup.style.display = "none";
                    document.querySelector('.main h1').style.display = 'block';
                }                    
            }, 1000)
        }

        counter();
    }
}
