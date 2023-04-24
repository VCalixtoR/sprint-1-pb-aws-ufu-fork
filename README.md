# Avaliação Sprint 1 - Vinícius Calixto

## Sobre o Repositório

Este repositório possui uma solução para a primeira avaliação do curso machine learning para AWS da Compass UOL. O objetivo é a implementação de um sistema de verificação de PIN interativo com o usuário usando JavaScript. Foram abordadas boas práticas e padrões de projetos web para a execução da atividade.

## Início Rápido

Para executar o código localmente:
1. Clone este repositório
2. Faça um checkout para esta branch
3. Utilize um navegador de sua preferência para abrir a página padrão index.html localizada na pasta src

## Funcionamento

Ao iniciar a página padrão do repositório é sorteado um PIN de tamanho configurável por uma constante no módulo app.js, a partir deste ponto o usuário pode, interativamente, tentar descobrir o PIN ao entrar com um número no input de PINs disponibilizado pela página e clicando no botão Verify, ao clicar a mensagem exibida ao lado do input é modificada para indicar como está o processo para encontrar o número, se o pin foi recriado ou se o pin foi encontrado.
O botão Change Pin atualiza o PIN internamente para se iniciar um novo processo de descoberta.

## Do Desenvolvimento da Atividade

Inicialmente foram pesquisadas boas práticas para a definição da estrutura do projeto, como resultado, este projeto se baseia na arquitetura disponível para aplicações web html5-boilerplate. O repositório é mantido e atualizado por contribuintes do mundo todo por 10 anos com a finalidade de estabelecer uma estrutura inicial para criação de projetos WEB.

* [html5 boilerplate](https://github.com/h5bp/html5-boilerplate/)

Para padronizar a nomenclatura html, css e o código JS foi utilizado um padrão não oficial definido por estudantes da Universidade de Washington.

* [CSE 154 — Unofficial Style Guide](https://courses.cs.washington.edu/courses/cse154/17au/styleguide/index.html)

Definido as padronizações, foi desenvolvido um esqueleto inicial do código que funciona utilizando comandos alert e console.log juntamente com elementos html não estilizados, esta versão é disponível no primeiro commit desta branch.

Após a definição do esqueleto, para tornar a interface mais amigável, foram escolhidas e utilizadas imagens gratúitas como background e favicon e foram feitos refactorings no código js, html e css para mudar a integração js html.

Por fim, este README foi criado e a branch foi enviada ao repositório remoto.