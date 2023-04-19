let raioDeProximidade = 0.15; //Raio de proximidade entre o valor digitado e o pin sorteado
let tentativa = 0; // Variável para armazenar o valor inserido
let range = 999; // Tamanho do invervalo de dados possíveis
let pin = getPin(range); // Pin a ser advinhado
let repeticao = true;

alert("Avaliação de Scrum: Verificação de PIN.");
tentativa = prompt("Insira um número de 0 a 999: ");

while(repeticao){

    switch( avaliacaoDoDado(tentativa, pin, raioDeProximidade, range) ){
        case 1:
            alert("Parabéns, você acertou!!!\nO pin era " + ("000" + pin).slice(-3));
            repeticao = false;
            break;
        case 2:
            tentativa = prompt("Quase! O tente um valor maior: ");
            break;
        case 3:
            tentativa = prompt("Quase! O tente um valor menor: ");
            break;
        case 4:
            tentativa = prompt("Errado... O tente um valor muito maior: ");
            break;
        case 5:
            tentativa = prompt("Errado... O tente um valor muito menor: ");
            break;
    }

}









function getPin(range){
    return Math.round(Math.random()*range);
}


function avaliacaoDoDado(valor, pin, raio, range){
    let resultado = 0;
    if(valor == pin){

        resultado = 1;

    }else if(Math.abs(valor -  pin) <= (raio * range)){
        if(valor < pin){
            resultado = 2;
        }else{
            resultado = 3;
        }
    }else{
        if(valor < pin){
            resultado = 4;
        }else{
            resultado = 5;
        }
    }

    return resultado;
}