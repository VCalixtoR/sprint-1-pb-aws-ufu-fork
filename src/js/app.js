//  Uses IIFE - Wraps code inside a function scope to avoid global scope problems
let loadAppScope = (function() {

  // function scope consts and variables
  const PIN_CODE_MAX_LENGTH = 8;
  let pinCode;

  // set event listeners
  window.onload = function() {
    let verifyPinButton = document.getElementById("verify-pin-button");
    let changePinButton = document.getElementById("change-pin-button");
    verifyPinButton.addEventListener("click", verifyPin);
    changePinButton.addEventListener("click", changePin);
  }

  // verifies PIN
  function verifyPin() {
    let pinInputValue = document.getElementById("pin-input").value;
    if (pinCode > pinInputValue * 2) {
      alert('PIN Code is much bigger than your number!');
    } else if (pinCode > pinInputValue) {
      alert('PIN Code is bigger than your number!');
    } else if (pinCode < pinInputValue * 0.5) {
      alert('PIN Code is much less than your number!');
    } else if (pinCode < pinInputValue) {
      alert('PIN Code is less than your number!');
    } else {
      alert('You did it!', pinCode);
    }
  }

  // randomly changes PIN in interval: [0, 10^(PIN_CODE_MAX_LENGTH-1)]
  function changePin() {
    pinCode = Math.floor( Math.random() * Math.pow( 10, PIN_CODE_MAX_LENGTH - 1 ));
  }

  // sets initial PIN
  changePin();

})();

loadAppScope;