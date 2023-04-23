/* Author: Pedro Henrique Resende Ribeiro
 * Description: Sprint 001 - PIN Game
 * Date: 2023-04-20 - Time: 13:30
 */

const PIN = Math.floor(Math.random() * 500);

alert("PIN Game - UOL Compass\nTry to guess the PIN (range from 0 to 500)");
let number;

while (true) {

    number = prompt("Type your guess: ");

    if (number === "") {
        
        alert("The field is empty!");

    } else if (number < 0 || number > 500) {

        alert("The PIN is out of range!");

    } else if (number < PIN * 0.9) {

        alert("The PIN is much bigger!");

    } else if (number >= PIN * 0.9 && number < PIN) {

        alert("The PIN is bigger!");

    } else if (number > PIN * 1.1) {

        alert("The PIN is much smaller!");

    } else if (number <= PIN * 1.1 && number > PIN) {

        alert("The PIN is smaller!");

    } else if (number == PIN) {

        alert("Congratulations! Reload the page to try again!");
        break;

    }

}
