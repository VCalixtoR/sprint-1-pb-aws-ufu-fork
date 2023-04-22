
let pin=Math.floor(Math.random()*10001);
console.log(`O pin é ${pin}`);

while(1){
    let num=prompt("Digite um numero natural até 10000:");

    if(isNaN(num)){
        alert("O valor não é um número!");
        continue;
    }

    if(num<0 || num>10000){
        alert("O valor não é valido");
        continue;
    }

    if(num==pin){
        alert("Parabens voce acertou o numero!");
        break;
    }

    let diferenca= pin-num;

    if(diferenca>0){
        if(diferenca<=500){
            alert("Quase! Digite um valor maior!");
        }
        else{
            alert("Longe! Digite um valor muito maior!");
        }
    }

    if(diferenca<0){
        if(diferenca>=-500){
            alert("Quase! Digite um valor menor!");
        }
        else{
            alert("Longe! Digite um valor muito menor!");
        }
    }
}


