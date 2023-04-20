# Avaliação Sprint 1 - Programa de Bolsas Compass UOL / AWS e UFU

Avaliação da primeira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

***

## Execução (Código Fonte)

Faça um sistema em JavaScript para construção de um sistema de verificação de PIN (Personal Identification Number). O sistema contará com dicas se o usuário está colocando um número próximo, a maior ou menor que o correto.

**Especificações**:

Passo a passo para iniciar o projeto:

1. Clone o repositório.
2. Crie a branch para subir# Avaliação Sprint 1 - Programa de Bolsas Compass UOL / AWS e UFU

##### Projeto da primeira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

 Projeto realizado por Gabriel Couto de Freitas.

***

## Descrição do programa

O programa em questão estabelece um PIN aleatório e, em seguida, pede ao usuário que insira o valor desse pin. Se o usuário acertar, é exibida uma mensagem na tela congratulando-o. Se não, uma outra mensagem é mostrada: informando se o usuário digitou um número maior, menor, muito maior ou muito menor.
Assim que o usuário acerta, o programa para de pedir novas tentativas e encerra.
***
## Especificações do código
**Funções:**
```javascript
function getRandomPin(min, max)
```
Retorna um valor inteiro aleatório gerado variando do numero passado como min até o valor passado como max. No caso do programa, para gerar um PIN de 4 dígitos, a função foi chamada e armazenada da seguinte forma: 
```javascript
let pin = getRandomPin(1000,9999);  
```

```javascript
function getDifference(pin,guess);
```
A função getDifference retorna a diferença entre o valor que o usuário digitou, guess, e o PIN que foi gerado com a função anterior. O programa foi implementado verificando o sinal do número que foi retornado, sendo positivo se a tentativa foi menor que o PIN e negativo se a tentativa foi maior que o PIN.

**Programa:**
O programa gera o PIN aleatório e armazena em uma variável. Em seguida, cria uma variável 'acertou' igual a false. Ela serve para determinar a condição de parada do programa, que é quando o usuário acertar o PIN.

Em seguida, escreve no console o PIN que foi gerado, a fim de facilitar os testes do programa.

Após isso, entra no loop que pede para o usuário tentar adivinhar o PIN, registra a diferença entre o PIN e o valor inserido em uma variável e realiza os testes. Se for igual a 0, imprime que o usuário acertou e encerra o loop.

Caso contrário, verifica, se a diferença for positiva, quer dizer que o usuário digitou um número menor que o PIN, e se for negativa, digitou um número maior que o PIN.
Se essa diferença, em módulo, for maior que 1000, quer dizer que o usuário errou muito longe, ou seja, se for maior que 1000, ele digitou um número MUITO menor, e se for menor que -1000, digitou um número MUITO maior.
***
### Passo a passo para executar e testar o projeto:

1. Baixe o repositório no seu computador.
2. Abra o arquivo "index.html"  no seu navegador de escolha.
3. Pronto!
*** seu código.
2. Crie um arquivo para colocar seu programa JavaScript (.js).
3. Desenvolva o código, que deverá conter as seguintes características:
    - solicite ao usuário que insira um número;
    - verifique se o número inserido é maior ou menor que o valor esperado;
    - caso seja o valor correto, imprima na tela uma mensagem de parabéns;
    - caso contrário, indique ao usuário se o próximo valor deve ser maior, muito maior, menor ou muito menor que o informado.
4. Após testado na máquina local, suba os arquivos de código e o README no GitHub.
5. Ao escrever o comentário do commit, utilize os Commits Semânticos: https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/ 

*Dica: lembre de adicionar debug no seu código para ajudá-lo a identificar e corrigir erros.*


***

## O que será avaliado?

- Em JavaScript, conforme proposta
- Seguir as atividades na ordem proposta
- Organização geral do código fonte
  - Estrutura de pastas
  - Estrutura da logica de negócio
  - Otimização do código fonte (evitar duplicações de código)
- Objetividade do README.md

***

## Entrega

- Aceitar o convite do repositório da sprint-1-pb-aws-ufu;
- **O trabalho deve ser individual**;
- Criar uma branch no repositório com o formato nome-sobrenome (Exemplo: daniel-muller);
- Subir o trabalho na branch com um [Readme.md](README.md)
  - documentar detalhes sobre como a avaliação foi desenvolvida
  - dificuldades conhecidas
  - como utilizar o sistema
  - 🔨 código fonte desenvolvido (Sugestão: pasta `src`)
- O prazo de entrega é até às 12h do dia 24/04/2023 no repositório do github ([https://github.com/Compass-pb-aws-2023-UFU/sprint-1-pb-aws-ufu](https://github.com/Compass-pb-aws-2023-UFU/sprint-1-pb-aws-ufu)).
