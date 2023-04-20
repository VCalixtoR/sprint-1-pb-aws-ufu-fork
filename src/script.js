
/** value_check
* @brief Função que analisa um parâmetro numérico pin definido 
*        e compara com um outro valor userPin passado, geralmente pelo usuário,
*		 retornando os códigos indicativos da proximidade ou distância
*		 dos mesmos, com base num intervalo considerado como parâmetro.
*        Caso o invervalo escolhido seja 100, e pin seja maior, então os
*        100 menores valores serão considerados próximos, os demais distantes.
*        Caso pin seja menor, os 100 valores acima serão considerados
*        próximos, os demais distantes.
*
* @param  {Number}pin - número qualquer definido
* @param  {Number}userPin - número a ser comparado, geralmente digitado pelo usuário
* @param  {Number}interval - intervalo para considerar o nível de proximidade
*
* @return 0 - indica igualdade dos números pin, userPin
*         1 - indica que userPin é menor, mas próximo (dentro do intervalo do fator)
*         2 - indica que userPin é menor, mas distante (fora do intervalo do fator)
*         3 - indica que userPin é maior, mas próximo (dentro do intervalo do fator)
*         4 - indica que userPin é maior, mas distante (fora do intervalo do fator)
*         -1 - indica erro de valor vazio ou parâmetros não numéricos passados
*
* @author Paulo Diego S Souza
* @date 19/04/23
* @bugs Nenhum conhecido
*/
function value_check(pin, userPin, interval){
    if(pin == '' || userPin == '' || typeof(pin) != "number" || typeof(userPin) != "number" || typeof(interval) != "number" ){
        return -1; //verificando valores vazios ou tipos diferentes do tipo number.
    }
    
    if(pin == userPin){
        return 0; //valor 0 indica a igualdade dos valores
    }else if (userPin < pin){ //O usuário forneceu um userPin menor que o pin
        if(userPin + interval >= pin){
            return 1; //valor 1 indica que o número inserido de userPin é menor, embora dentro do intervalo definido.
        }else{
            return 2; //valor 2 indica que o número inserido de userPin é menor e fora do intervalo definido.
        }
    }else{ //O usuário forneceu um userPin maior que o pin
        if(userPin - interval <= pin){
            return 3; //valor 3 indica que o número inserido de userPin é maior, embora dentro do intervalo definido.
        }else{
            return 4; //valor 4 indica que o número inserido de userPin é menor e fora do intervalo definido.
        }
    }

}

/** pin_check
* @brief Função responsável pela definição dos valores de código pin,  
*        obtenção do código userPin digitado pelo usuário, definição do intervalo
*		 a ser considerado, além de imprimir a mensagem adequada para guiar e
*		 conduzir o usuário para a inserção do pin correto.
*        
* @author Paulo Diego S Souza
* @date 19/04/23        
* @bugs Nenhum conhecido
*/
function pin_check (){
    //Configurações - início
    let pin = 200; //pin definido
    let interval = 100; //intervalo que será considerado para definir nível de proximidade
    //Configurações - fim

    let userPin = Number(document.getElementById("pinNumber").value); //pin digitado pelo usuário
    let result = value_check(pin, userPin, interval); //chamada da função para computar o resultado

    let resultMsg = document.getElementById("pinMsg"); //variável para facilitar a alteração da mensagem em tela
    //Impressão da mensagem, de acordo com cada retorno da função value_check
    if(result == -1){
        resultMsg.innerText = "Insira um número!"
    }else if (result == 0){
        resultMsg.innerText = "Parabéns, você acertou!"
    }else if (result == 1){
        resultMsg.innerText = "Tente um número um pouco maior!"
    }else if(result == 2){
        resultMsg.innerText = "Tente um número muito maior!"
    }else if(result == 3){
        resultMsg.innerText = "Tente um número um pouco menor!"
    }else if(result == 4){
        resultMsg.innerText = "Tente um número muito menor!"
    }

}
