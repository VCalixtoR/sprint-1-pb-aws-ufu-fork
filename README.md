# Avaliação Sprint 1 - Sistema de verificação de PIN
**Autor: Paulo Diego S Souza**

O sistema de verificação de PIN (Personal Identification Number) te ajuda na hora de inserir o seu código, te informa se o número que você está inserindo está um pouco maior, muito maior, um pouco menor ou muito menor do que aquele cadastrado, além de te parabenizar ao inseri-lo corretamente.

***
## Desenvolvimento

O sistema foi desenvolvido com base nas aulas de javascript da primeira sprint, fazendo uso de uma página HTML (index.html) para facilitar a inserção dos dados do usuário. Foram criadas duas funções, uma função value_check(pin,userPin,interval), mais generalista, que considera 3 valores numéricos e classifica o nível de proximidade de pin e userPin considerando o intervalo, retorna os códigos indicativos para cada análise. A segunda função é mais específica para a resolução da atividade e considera a configuração dos valores pin, interval, além da obtenção dos dados registrados na página index pelo usuário, além de imprir no local específico da marcação as mensagens que irão guiar o usuário para novas inserções. A página index.html importa o arquivo javascript que encontra-se dentro da pasta src. O principal desafio foi tentar não criar tanta complexidade para a tarefa objetiva solicitada.

***
## Execução (Código Fonte)

O sistema faz uso de um arquivo index.html que importa as funções do script.js contido na pasta src. O sistema espera a pré-definição dos valores de Pin e do intervalo para consideração o nível de proximidade com os valores que serão inseridos pelo usuário. O sistema está pré-configurado e pode ser utilizado ao clicar na página index.html, mas pode ser configurado de acordo com seu desejo.

**Passo a passo para configuração**:

1. Abra o arquivo script.js, na pasta src, em seu editor de texto de preferência.
2. Na função pin_check, onde há a indicação de configuação-início, altere os valores do pin e defina o intervalo a ser considerado.
3. Salve as alterações.
4. Abra o arquivo index.html no navegador ou com clique duplo.
5. Você está pronto para acertar o seu PIN!


*Observação: Outros detalhes das funções estão documentados no código.*
