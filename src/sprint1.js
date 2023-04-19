const pin = 5000;   // Atribuição do PIN
let num;    // Declaração da variável num, que será o número digitado pelo usuário

while (1) {

    num = prompt("Digite um numero positivo de 4 algarismos: ");

    // Faz a verficação se o usuário digitou o número corretamente
    if (num < 1000 || num > 9999) {
        console.log("ERRO: O numero deve ter 4 algarismos!\n");
        continue;
    }

    let dif = pin - num;  // Calcula a diferença entre o PIN e o número digitado e atribui na variável dif

    if (dif == 0) { // Se a diferença for 0, então quer dizer que os números são iguais
        console.log("Parabéns, voce acertou!!!");
        break;  // sai do loop
    }
    else if (dif > 0) {     // Se o numero digitado for menor que o PIN, entra nessa condição
        // Se o PIN for muito maior que o número
        if (dif >= 1000) {
            console.log("Muito maior...");  // imprime na tela "Muito maior..."
        }
        // Se não for tão maior assim
        else if (dif <= 1000 && dif >= 500) {
            console.log("Maior...");    // imprime na tela "Maior..."
        }
        else if (dif < 100) {
            console.log("Um pouquinho maior...");
        }
    }
    else if (dif < 0) {     // Se o numero digitado for maior que o PIN, entra nessa condição
        // Se o PIN for muito menor que o número
        if (dif <= -1000) {
            console.log("Muito menor...");  // imprime na tela "Muito menor..."
        }
        else if (dif >= -1000 && dif <= -500) {
            console.log("Menor...");    // imprime na tela "Menor..."
        }
        else if (dif > -100) {
            console.log("Um pouquinho menor...");
        }
    }
}