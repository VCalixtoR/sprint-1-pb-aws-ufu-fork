//alert("Bem vindo ao desafio 1 da Sprint de AWS!!");

// Função para definir o PIN correto
function setPin(){
    let pin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000; // Gera um número aleatório entre 1000 e 9999
    return pin;
}

// Função para receber o PIN digitado pelo usuario e verificar se ele é válido
function userPin() {
    var input = prompt("Digite um número:");
    var numero = parseInt(input); // Converte a entrada do usuário em um número
  
    
    if (isNaN(numero)) {   // Verifica se o valor capturado é um número válido
        console.log("O valor capturado não é um número válido.");
        return false;
    } else {
        console.log(`O PIN capturado é um número: ${numero}`);
        return numero;
      
    }
  }
  
  //Função que faz a associação do PIN digitado, direcionando o usuário com dicas se o valor é maior, menor, bem maior e bem menor.
  function verificaPin(pin_user,pin_password){
    let diferença = pin_password - pin_user; // O Delimitador escolhido para a dica, foi a análise da diferença
    if (pin_user == null) return;
    if(diferença == 0){
        console.log("Parabens!! PIN CORRETO!");
        return true;
    }
    else if (diferença < 0){ // Trata caso o pin esperado seja menor que o digitado
        diferença = Math.abs(diferença);
        if( diferença > 1000 ) {
            console.log(`Pin esperado é BEM menor que o digitado (${pin_user})`);
            return false;
        }
        else{
            console.log(`Pin esperado é menor que o digitado (${pin_user})`);
            return false;
        }
    }
    else{ // Trata caso o PIN Esperado seja maior que o digitado
        if( diferença > 1000 && pin_user!= false ) {
            console.log(`Pin esperado é BEM MAIOR que o digitado (${pin_user})`);
            return false;
        }
        else if(diferença < 1000 && pin_user!= false){
            console.log(`Pin esperado é MAIOR que o digitado (${pin_user})`);
            return false;
        }     
    }   
} 


  // Chama a função para capturar e verificar o número
  
  var pinCorreto = setPin();
  var numero = 1;
 // Exibe o número capturado, se válido
  while(!verificaPin(numero,pinCorreto) && numero !=null)
  {
    numero = userPin();
   // verificaPin(numero,pinCorreto);
  }


  // Não aceita STRING nem NULL



