
let numeroPrev = 2500;
let diff = null;

while(diff != 0){
    let pin = prompt('Insira um valor:');
    diff = (pin - numeroPrev);
    if(diff == 0){
        alert("Parabéns! Você acertou o valor.")
    }else if(diff >= -750 && diff <= 750){
            if(diff < 0){
                alert("Insira um valor maior");
            } else {
                alert("Insira um valor menor");
            }
    }else{
        if(diff < 0){
            alert("Insira um valor muito maior");
        } else {
            alert("Insira um valor muito menor");
        }
    }
}