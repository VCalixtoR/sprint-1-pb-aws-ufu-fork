const pin = 5000;   // Atribuição do PIN
//obs: O PIN deverá estar no intervalo de 1000 até 9999 ( 1000 <= PIN <= 9999) para garantir que tenha 4 dígitos sem zeros à esquerda.
let num;    // Declaração da variável num, que será o número digitado pelo usuário


console.log("Esse é um sistema de verificacao de PIN.");
console.log("Seu objetivo é adivinhar o PIN de 4 algarismos sem zeros a esquerda.\n")

while (1) {

    num = prompt("PIN: ");

    // Faz a verficação se o usuário digitou o número corretamente
    if (num < 1000 || num > 9999) {
        console.log("\nERRO: O numero deve ter 4 algarismos!\n");
        continue;
    }

    let dif = pin - num;  // Calcula a diferença entre o PIN e o número digitado e atribui na variável dif

    if (dif == 0) { // Se a diferença for 0, então quer dizer que os números são iguais
        console.log("Parabéns, voce acertou!!!");
        break;  // sai do loop
    }
    else if (dif > 0) {     // Se o numero digitado for menor que o PIN, entra nessa condição
        // Se o PIN for muito maior que o número
        if (dif >= 1000) {  // intervalo de 1000 até 9999
            console.log("Muito maior...");  // imprime na tela "Muito maior..."
        }
        // Se não for tão maior assim
        else if (dif < 1000 && dif > 100) {    // intervalo de 999 até 100
            console.log("Maior...");    // imprime na tela "Maior..."
        }
        else if (dif <= 100) {   // intervalo de 100 até 1
            console.log("Um pouquinho maior...");
        }
    }
    else if (dif < 0) {     // Se o numero digitado for maior que o PIN, entra nessa condição
        // Se o PIN for muito menor que o número
        if (dif <= -1000) { // intervalo de -1000 até -8999
            console.log("Muito menor...");  // imprime na tela "Muito menor..."
        }
        else if (dif >= -1000 && dif < -100) {
            console.log("Menor...");    // imprime na tela "Menor..."
        }
        else if (dif >= -100) {
            console.log("Um pouquinho menor...");
        }
    }
}