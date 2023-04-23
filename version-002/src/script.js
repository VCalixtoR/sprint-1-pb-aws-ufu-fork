/* Author: Pedro Henrique Resende Ribeiro
 * Description: Sprint 001 - UOL Compass
 * Date: 2023-04-20 - Time: 13:30
 */

const PIN = Math.floor(Math.random() * 500);
console.log(PIN)

const form = document.getElementById("form");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {

    const passwordValue = password.value;
    console.log(passwordValue);

    if (passwordValue === '') {
        setErrorFor(password, "The field is empty!");
    } else if (passwordValue < 0 || passwordValue > 500) {
        setErrorFor(password, "The guess is out of range!")
    } else if (passwordValue < PIN * 0.9) {
        setErrorFor(password, "The PIN is much bigger!");
    } else if (passwordValue > PIN * 1.1) {
        setErrorFor(password, "The PIN is much smaller!");
    } else if (passwordValue >= PIN * 0.9 && passwordValue < PIN) {
        setErrorFor(password, "The PIN is bigger!");
    } else if (passwordValue <= PIN * 1.1 && passwordValue > PIN) {
        setErrorFor(password, "The PIN is smaller!");
    } else if (passwordValue == PIN) {
        setSuccessFor(password, "Congratulations! Reload the page to try again!");
    }

}

function setErrorFor(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    
    small.innerText = message;
    formControl.className = "form-control error";

}

function setSuccessFor(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    
    small.innerText = message;
    formControl.className = "form-control success";

}
