let pin=getRandomPin(1000,9999);    
let acertou=false;                   

console.log(`Pin sorteado aleatoriamente: ${pin}`);                    
                                     

while(!acertou){
    let guess=prompt("Insira o PIN:");
    let diferenca=getDifference(pin,guess);

    if(diferenca==0){
        alert(`Parabéns! Você acertou o PIN ${pin}`);
        acertou=true;
    }
    else if(diferenca>0){
        if(diferenca>=1000)
            alert(`Nem perto! ${guess} é MUITO menor que o PIN! Tente novamente.`);
        else
            alert(`Quase! ${guess} é menor que o PIN! Tente novamente`);
    }
    else{
        if(diferenca<=-1000)
            alert(`Nem perto! ${guess} é MUITO maior que o PIN! Tente novamente.`);
        else
            alert(`Quase! ${guess} é maior que o PIN! Tente novamente.`);
    }
}

function getDifference(pin,guess){
    return pin-guess;
}

function getRandomPin(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}