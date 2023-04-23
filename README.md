# Avaliação Sprint 1 - Programa de Bolsas Compass UOL / AWS e UFU

<p align="justify">
Avaliação da primeira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.
</p>

***

## Descrição

<p align="justify">
A aplicação é um jogo no qual o usuário deve acertar um PIN gerado aleatoriamente no intervalo de 0 a 500. O programa pede um número no intervalo mencionado. Caso o número seja igual ao PIN, será mostrada uma mensagem parabenizando o usuário pelo acerto. Caso seja menor ou maior, também serão montradas mensagens informando que o número é muito menor, menor, maior ou muito maior do que o PIN.
</p>

<p align="justify">
Foram desenvolvidas duas versões do jogo. A primeira versão (contida na pasta version-001) contém apenas conhecimentos de JavaScript estudados durante a primeira sprint. A segunda versão (contida na pasta version-002) contém elementos mais avançados de JavaScript e também possui um arquivo CSS para alterar o estilo da página.
</p>

**Obs: Ambas as versões possuem a mesma lógica de funcionamento.**

***

## Lógica do código

<p align="justify">
Considere que o PIN gerado aleatóriamente seja igual a 300. Para a análise do número informado pelo usuário, utilizou-se a seguinte lógica:
</p>

- Se o usuário clicar em "Ok" com o campo vazio, será mostrada a mensagem "The field is empty!".
- Se o número digitado for menor que 0 ou maior que 500, será mostrada a mensagem "The guess is out of range!".
- Se o número for menor do que 270 (10% abaixo de 300), será mostrada a mensagem "The PIN is much bigger!".
- Se o número for maior ou igual a 270 e menor que 300, será mostrada a mensagem "The PIN is bigger!".
- Se o número for maior do que 330 (10% acima de 300), será mostrada a mensagem "The PIN is much smaller!".
- Se o número for menor ou igual a 330 e maior que 300, será mostrada a mensagem "The PIN is smaller!".
- Caso o usuário digite 300, será mostrada a mensagem "Congratulations! Reload the page to try again!".

***

## Como executar

<p align="justify">
Para executar a versão simplificada (version-001) ou a versão completa do projeto (version-002), siga o passo-a-passo descrito abaixo:
</p>

1. Clone o repositório
2. Abra a pasta "version-001" ou "version-002"
3. Execute o arquivo "index.html" no navegador de sua preferência

***

## Exemplo de execução

<p align="justify">
Quando o arquivo "index.html" da versão simplificada é executado, a caixa de diálogo mostrada na Figura 1 é aberta.
</p>

</br>

<p align="center">
  <img src=./images/version-001.png width="50%">
</p>

<p align="center">
Figura 1 - Execução da versão simplificada
</p>

</br>

<p align="justify">
Nela, o usuário informa o número que deseja tentar e clica em "Ok". De acordo com a lógica menciona na seção "Descrição", mensagens de alerta são mostradas informando se o usuário acertou ou se o número é maior ou menor do que o PIN.
</p>

<p align="justify">
Para a versão completa, quando o arquivo "index.html" é executado, a página mostrada na Figura 2 é aberta.
</p>

</br>

<p align="center">
  <img src=./images/version-002.png width="50%">
</p>

<p align="center">
Figura 2 - Execução da versão completa
</p>
