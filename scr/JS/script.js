let raioDeProximidade = 0.15; //Raio de proximidade entre o valor digitado e o pin sorteado
let numeroDeDigitos = 3; // Quantos dígitos deverá ter o PIN
let tentativa = 0; // Variável para armazenar o valor inserido
let pin = getPin(numeroDeDigitos); // Pin a ser advinhado
let repeticao = true; // Controlador de repeticao da solicitação de pin

alert("Avaliação de Scrum: Verificação de PIN.");
tentativa = prompt( `Insira um PIN de ${numeroDeDigitos} dígitos: `);

while(repeticao){

    switch( avaliacaoDoDado(tentativa, pin, raioDeProximidade, numeroDeDigitos) ){
        case 1:
            alert("Parabéns, você acertou!!!\nO PIN era " + ("000000000" + pin).slice(-numeroDeDigitos));
            repeticao = false;
            break;
        case 2:
            tentativa = prompt("Quase! Tente um PIN MAIOR: ");
            break;
        case 3:
            tentativa = prompt("Quase! Tente um PIN MENOR: ");
            break;
        case 4:
            tentativa = prompt("Errado... Tente um PIN muito MAIOR: ");
            break;
        case 5:
            tentativa = prompt("Errado... Tente um PIN muito MENOR: ");
            break;
        case 6:
            tentativa = prompt(`Entrada inválida... Insira um PIN de ${numeroDeDigitos} dígitos: `);
            break;
        default:
            alert("Erro desconhecido. Dados no console");
            repeticao = false;

            // DADOS PARA AJUDAR A ENCONTRAR OU REPLICAR O ERRO
            console.log("PIN: " + pin);
            console.log("tentativa: " + tentativa);
            console.log("Tipo da tentativa: " + typeof tentativa);
            console.log("Valor retornado da avaliacao do dado: " + avaliacaoDoDado(tentativa, pin, raioDeProximidade, numeroDeDigitos));
            break;        
    }

}


function getPin(numeroDeDigitos){
    return Math.round(Math.random()*Math.pow(10,numeroDeDigitos));
}


function avaliacaoDoDado(valor, pin, raioDeProximidade, numeroDeDigitos){

    //BLOCO DE TESTES DE VALIDADE DO DADO
    if((valor.length != numeroDeDigitos) || (valor*1 < 0) || (isNaN(valor*1)) || ((valor % 1) != 0)){
        return 6; //Casos rejeitados: Valor vazio, quantiade de digitos diferente, numeros negativos, texto e numeros decimais
    }

    //BLOCO DE TESTE DE PROXIMIDADE
    if(valor == pin){
        return 1; // Retorno caso o usuário acerte
    }
    if(Math.abs(valor -  pin) <= (raioDeProximidade * ( Math.pow(10,numeroDeDigitos)-1 ))){
        if(valor < pin){
            return 2; // Retorno caso a tentativa esteja próxima e abaixo do PIN
        }else{
            return 3; // Retorno caso a tentativa esteja próxima e acima do PIN
        }
    }else{
        if(valor < pin){
            return 4; // Retorno caso a tentativa esteja longe e abaixo do PIN
        }else{
            return 5; // Retorno caso a tentativa esteja longe e acima do PIN
        }
    }

    return resultado;
}