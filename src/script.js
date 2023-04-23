const pin = Math.floor((Math.random() * 100));
     
let request = 0;

let diferenca = 0;

while(request != pin){
    console.log(pin);
    request = prompt("Bem, vindo a validação de Pin,Por favor insira um numero de 0 a 100 para acessar");
    
    diferenca = pin - request;
//    console.log(diferenca);
    if(request < 0 || request > 100){
        console.log("O numero digitado esta fora do escopo permitido");
        break;
    } else if (diferenca > 20 ){
        
        console.log("O proximo valor digitado deve ser muito maior");
    
    }else if(diferenca > 0 && diferenca < 20 ){ 
        
        console.log("O proximo valor digitado deve ser um pouco maior");
    
    }else if(diferenca < -20 ){

        console.log("O proximo valor digitado deve ser muito menor ");

    }else if(diferenca < 00 && diferenca > -20  ){ 
                
        console.log("O proximo valor digitado deve ser um pouco menor ");
    
    }else if(request == pin ){
        
        console.log("Você acertou o numero, Parabens!!!!"); 
        
        console.log("O numero sorteado o foi o " + pin); 
        
        break; 
    
    }            
}