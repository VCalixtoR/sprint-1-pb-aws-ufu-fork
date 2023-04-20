let pin=getRandomPin(1000,9999);    //Gera um PIN aleatorio de 4 digitos
let acertou=false;                  //Variavel bool para marcar quando o usuario acertou o PIN

console.log(`Pin sorteado aleatoriamente: ${pin}`); /*
                                                    Mostra no console do programador o PIN
                                                    que foi gerado aleatoriamente, com fim 
                                                    de testar as funcionalidades 
                                                    */

while(!acertou){    //Realiza o loop enquanto o usuário não acertar o PIN
    let guess=prompt("Insira o PIN:");              //Pede ao usuario uma tentativa para o PIN
    let diferenca=getDifference(pin,guess);         //Armazena a diferença entre a tentativa e o PIN

    if(diferenca==0){           //Se for 0 a diferença, o usuário acertou o pin
        alert(`Parabéns! Você acertou o PIN ${pin}`);
        acertou=true;           //Seta a condição de parada do loop 
    }
    else if(diferenca>0){       //Se a tentativa foi menor que o PIN:   
        if(diferenca>=1000)     //Se foi 1000 ou mais números menor, foi "MUITO menor"
            alert(`Nem perto! ${guess} é MUITO menor que o PIN! Tente novamente.`);
        else                    //Se não, foi "menor"
            alert(`Quase! ${guess} é menor que o PIN! Tente novamente`);
    }
    else{                       //Se a tentativa foi maior que o PIN:
        if(diferenca<=-1000)    //Se foi 1000 ou mais números maior, foi "MUITO maior"
            alert(`Nem perto! ${guess} é MUITO maior que o PIN! Tente novamente.`);
        else                    //Se não, foi "menor"
            alert(`Quase! ${guess} é maior que o PIN! Tente novamente.`);
    }
}

function getDifference(pin,guess){  //Função que retorna o valor da diferença da tentativa e do PIN
    return pin-guess;
}

function getRandomPin(min, max){    //Gera um PIN aleatório variando do valor MIN ao valor MAX
    return Math.floor(Math.random()*(max-min+1)+min);
}