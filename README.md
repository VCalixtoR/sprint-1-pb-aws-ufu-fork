#<h1 align="center"> Sprint 1 - Vitor Thomé </h1>

Sistema feito apara avaliação final da primeira sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.

O sistema contará com dicas se o usuário está colocando um número próximo, a maior ou menor que o correto.
 
# Acesso ao projeto 

Você pode acessar o códico fonte baixando os arquivos index.html e script.html

# Abrir e rodar o projeto 

- Salve os arquivos mencionados acima em sua máquina;
- Abra o seu navegador de prefência;
- Clique com o botão direito e abra a aba inspessionar; 
- Troque para a sessão console; 
- Copie o endereço do arquivo em seu navegador.

# No software

- Digite um número entre 0 a 100;
- O software verifica se o numero é maior ou menor que o PIN;
- O software indicará se o proximo numero inserido deverá ser muito maior, pouco maior, muito menor ou pouco menor;
- Quando o usuário digitar o numero exato do PIN o software irá apresentar uma mensagem parabenizando e encerrará em seguida. Além disso, o software irá encerrar se for digitado um número fora do escopo.

# Detalhes de desenvolvimento 

- O número PIN é sorteado por meio da função Math.random e colocado como inteiro pela função Math.floor e multiplicado por 100 para estar entre 0 e 100;

- O software ele foi feito em torno de um loop while o qual  por meio de if e else if, faz a seleção se o número digitádo é maior ou menor que o sorteado para ser o PIN.


