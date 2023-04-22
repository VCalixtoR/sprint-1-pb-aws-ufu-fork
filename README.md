# Avaliação Sprint 1 - Programa de Bolsas Compass UOL / AWS e UFU

Avaliação da primeira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

Projeto realizado por Ana Bárbara Campos Conti
***

## Descrição do programa

O programa gera um PIN aleatorio entre 0 e 10000, e o usuario deve por meio de tentativas acertar o PIN gerado. O programa pede para o usuário digitar um número e se ele acertar, mostra na tela uma mensagem de parabéns, caso nao seja o número gerado, o programa mostra mensagens falando se o usuário digitou um número maior, muito maior, menor ou muito menor.

## Como utilizar o sistema:

- Baixe o repositorio no seu computador;
- Abra o arquivo "index.html" em um navegador;
- O programa mostrará um prompt onde você deverá digitar um número;
- Continue digitando até aparecer uma mensagem mostrando que você acertou o número.

## Especificações do código

- Primeiramente o programa gera um número natural aleátorio de 0 a 10000 e armazena ele na variável pin;
- Ele mostra na tela de console esse número;
- Depois por meio de um loop ele pede para o usuário digitar um número;
- Ele verifica se oque foi digitado é um número e se é válido, caso contrário ele mostra uma mensagem de erro;
- Se o número digitado for igual o PIN ele mostra uma mensagem de parabéns e sai do loop;
- Caso contrário, ele faz a diferença desses dois valores;
- Se a diferença for positiva, siginifica que o valor digitado é menor que o PIN então o usuario deverá digitar um valor muito maior se essa diferença for maior que 500, ou maior se for menor que 500;
- Se a diferença for negativa, siginifica que o valor digitado é maior que o PIN então o usuario deverá digitar um valor muito menor se essa diferença for menor que -500, ou menor se for maior que -500;
- O programa so sai do loop quando o usuário acertar o valor do PIN

