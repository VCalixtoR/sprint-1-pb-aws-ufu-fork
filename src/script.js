
let pin=Math.floor(Math.random()*10001); //gera um pin aleatorio entre 0 e 10000
console.log(`O pin é ${pin}`);           // mostra no console do programador o PIN gerado

while(1){           // faz um loop ate o usuario acertar o PIN
    let num=prompt("Digite um numero natural até 10000:"); // pede ao usuario para digitar um numero natural de 0 10000

    if(isNaN(num)){ // faz o teste para compara se oque foi digitado é um número 
        alert("O valor não é um número!"); // se não for um numero mostra uma mensagem de erro
        continue; 
    }

    if(num<0 || num>10000){ // faz o teste para ver se é um numero valido dentro dos requisitos
        alert("O valor não é valido");
        continue;
    }

    if(num==pin){ // verifica se o numero digitado é igual o valor do PIN
        alert("Parabens voce acertou o numero!");
        break;
    }

    let diferenca= pin-num;  // faz a diferença entre o PIN gerado e o numero digitado

    if(diferenca>0){  // verifica se o pin é maior que o valor digitado
        if(diferenca<=500){ // verifica se o numero esta proximo do pin 
            alert("Quase! Digite um valor maior!");
        }
        else{
            alert("Longe! Digite um valor muito maior!"); // ou etsa muito longe do pin
        }
    }

    if(diferenca<0){ // verifica se o pin é menor que o valor digitado
        if(diferenca>=-500){
            alert("Quase! Digite um valor menor!"); 
        }
        else{
            alert("Longe! Digite um valor muito menor!");
        }
    }
}


