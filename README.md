# Avaliação Sprint 1 - Programa de Bolsas Compass UOL / AWS e UFU

##### Projeto da primeira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.
**Projeto realizado por Gabriel Couto de Freitas.**

***

## Descrição do programa

O programa em questão estabelece um PIN aleatório e, em seguida, pede ao usuário que insira o valor desse pin. Se o usuário acertar, é exibida uma mensagem na tela congratulando-o. Se não, uma outra mensagem é mostrada: informando se o usuário digitou um número maior, menor, muito maior ou muito menor.
Assim que o usuário acerta, o programa para de pedir novas tentativas e encerra.
***
## Estrutura do programa
O programa está dividido em 2 arquivos, um HTML que exibe a página no navegador, e o Script, que carrega o código propriamente dito do programa.
O HTML está localizado na pasta mãe e se chama "index.html".
O script está localizado na pasta "srx" e se chama "script.js".
***
## Especificações do código
#### Funções

**getRandomPin**
```javascript
function getRandomPin(min, max);
```
Retorna um valor inteiro aleatório gerado variando do numero passado como min até o valor passado como max. No caso do programa, para gerar um PIN de 4 dígitos, a função foi chamada e armazenada da seguinte forma: 
```javascript
let pin = getRandomPin(1000,9999);  
```

**getDifference**
```javascript
function getDifference(pin,guess);
```
A função getDifference retorna a diferença entre o valor que o usuário digitou, guess, e o PIN que foi gerado com a função anterior. O programa foi implementado verificando o sinal do número que foi retornado, sendo positivo se a tentativa foi menor que o PIN e negativo se a tentativa foi maior que o PIN.

**main**
```javascript
function main();
```
O código inteiro está dentro da main. Isso foi feito para que o script inteiro seja executado apenas após o usuário clicar no botão na tela. 
Isso foi feito para que a página carregue completamente antes do prompt aparecer na tela. Isso garante que as mensagens necessárias no console sejam enviadas com sucesso antes do programa ser executado.

**Programa:**
O programa gera o PIN aleatório e armazena em uma variável. Em seguida, cria uma variável 'acertou' igual a false. Ela serve para determinar a condição de parada do programa, que é quando o usuário acertar o PIN.

Em seguida, escreve no console o PIN que foi gerado, a fim de facilitar os testes do programa.

Após isso, entra no loop que pede para o usuário tentar adivinhar o PIN, registra a diferença entre o PIN e o valor inserido em uma variável e realiza os testes. Se for igual a 0, imprime que o usuário acertou e encerra o loop.

Caso contrário, verifica, se a diferença for positiva, quer dizer que o usuário digitou um número menor que o PIN, e se for negativa, digitou um número maior que o PIN.
Se essa diferença, em módulo, for maior que 1000, quer dizer que o usuário errou muito longe, ou seja, se for maior que 1000, ele digitou um número MUITO menor, e se for menor que -1000, digitou um número MUITO maior.
***
### Passo a passo para executar e testar o projeto:

1. Baixe o repositório no seu computador;
2. Abra o arquivo "index.html"  no seu navegador de escolha;
3. No site, clique no botão "Executar Script";
4. Pronto!
***