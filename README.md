# Avaliação Sprint 1 - Programa de Bolsas Compass UOL / AWS e UFU

Avaliação da primeira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS. O objetivo é solicitar ao usuário que insira um número e verificar se o número inserido é maior ou menor que um valor esperado, fornecendo dicas ao usuário sobre como prosseguir caso o valor inserido não seja o correto.

## Arquivos do projeto

- script.js: Este é o arquivo JavaScript que contém a implementação das funções para capturar e verificar o número inserido pelo usuário, bem como a lógica para fornecer dicas com base no valor inserido.

- index.html: Este é o arquivo HTML que exibe uma página simples contendo o título do desafio e o nome do autor.

## Funcionamento do código
1. A função setPin() gera um número aleatório entre 1000 e 9999, que será o valor esperado para o PIN correto.

2. A função userPin() solicita ao usuário que insira um número e converte a entrada em um valor numérico.

3. A função verificaPin(pin_user, pin_password) compara o valor inserido pelo usuário com o valor esperado do PIN correto e fornece dicas sobre como prosseguir com base na diferença entre os valores.

4. O código HTML exibe uma página simples com o título do desafio e o nome do autor.

5. O código JavaScript é carregado no arquivo HTML usando a tag <script>.

6. O código JavaScript é executado em um loop que captura o número inserido pelo usuário, verifica se é o valor correto do PIN e fornece dicas com base na comparação dos valores. O loop continua até que o valor correto do PIN seja inserido pelo usuário ou até que o usuário cancele a entrada.

## Como executar o projeto

Para executar o código, é necessário ter um navegador web e seguir os passos abaixo:

1. Clone este repositório em sua máquina local ou em um servidor web.
2. Abra o arquivo index.html em um navegador web.
3. Insira um número quando solicitado pelo código.
4. O código verificará se o número inserido é maior ou menor do que o valor esperado (PIN) e exibirá a mensagem apropriada.
5. Repita o processo até acertar o valor correto e receber a mensagem de parabéns.


## Observações
- O código foi desenvolvido com base nas instruções do desafio proposto na Sprint 1 da disciplina de AWS e pode ser aprimorado para atender a requisitos específicos adicionais.

- É importante ter cuidado ao trabalhar com números gerados aleatoriamente em um ambiente de produção, pois a função setPin() gera números aleatórios simples que podem não ser adequados para fins de segurança ou criptografia. Em um ambiente de produção real, é recomendado o uso de bibliotecas de geração de números aleatórios seguros.

## Tecnologias utilizadas
- JavaScript
- HTML
