//  Uses IIFE - Wraps code inside a function scope to avoid global scope problems
let loadAppScope = (function() {

  // function scope consts and variables
  const PIN_CODE_MAX_LENGTH = 4;
  const PIN_CODE_MAX_N = Math.pow( 10, PIN_CODE_MAX_LENGTH ) - 1;
  let pinCode;

  // set event listeners and sets initial PIN
  window.onload = function() {
    let verifyPinButton = document.getElementById("verify-pin-button");
    let changePinButton = document.getElementById("change-pin-button");
    verifyPinButton.addEventListener("click", verifyPin);
    changePinButton.addEventListener("click", changePin);
    changePin();
  }

  // verifies PIN
  function verifyPin() {
    let pinInputValue = document.getElementById("pin-input").value;
    let pinCheckInfoSpan = document.getElementById("pin-check-info-span");
    if (pinCode > pinInputValue * 2) {
      pinCheckInfoSpan.textContent = "Your PIN Code is much bigger than this number!";
    } else if (pinCode > pinInputValue) {
      pinCheckInfoSpan.textContent = "Your PIN Code is bigger than this number!";
    } else if (pinCode < pinInputValue * 0.5) {
      pinCheckInfoSpan.textContent = "Your PIN Code is much less than this number!";
    } else if (pinCode < pinInputValue) {
      pinCheckInfoSpan.textContent = "Your PIN Code is less than this number!";
    } else {
      pinCheckInfoSpan.textContent = `You did it! The number is ${pinCode}`;
    }
  }

  // randomly changes PIN in interval: [0, 10^(PIN_CODE_MAX_LENGTH-1)]
  function changePin() {
    let pinCheckInfoSpan = document.getElementById("pin-check-info-span");
    pinCode = Math.floor(Math.random() * PIN_CODE_MAX_N);
    pinCheckInfoSpan.textContent = "A new PIN has been created for you!";
  }

})();

loadAppScope;