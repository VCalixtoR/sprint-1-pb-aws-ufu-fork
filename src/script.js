function main(){
    let pin=getRandomPin(1000,9999);                    
    let acertou=false;                                                                  //Variavel de parada do loop
                    
    console.log(`Pin sorteado aleatoriamente: ${pin}`);                                 /*
                                                                                        Mostra no console do programador o PIN
                                                                                        que foi gerado aleatoriamente, com fim 
                                                                                        de testar as funcionalidades.
                                                                                        */

    while(!acertou){                                    
        //debugger;                                                                     //Usado na fase de testes, para facilitar os testes e monitorar variáveis
        
        let guess=prompt("Insira o PIN de 4 dígitos:"); 
        guess=parseInt(guess);                          

        if(isNaN(guess)){                                                               //Aceita apenas números
            alert("Tente novamente, digite um número válido.");
            continue;
        }

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

    function getDifference(pin,guess){                                                  //Função que retorna o valor da diferença da tentativa e do PIN
        return pin-guess;
    }

    function getRandomPin(min, max){                                                    //Gera um PIN aleatório variando do valor MIN ao valor MAX
        return Math.floor(Math.random()*(max-min+1)+min);
    }
}
