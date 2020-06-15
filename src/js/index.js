/* Here goes your JS code */
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
