Documentação do Projeto: Amigo Secreto

1. Visão Geral

* * *

Este é um projeto de front-end que cria uma aplicação web para organizar um sorteio de "Amigo Secreto". O objetivo é permitir que o usuário adicione nomes de participantes a uma lista, realize um sorteio simples com um clique e reinicie o processo facilmente.

1. Como o Projeto Funciona

* * *

O fluxo de funcionamento da aplicação é direto e centrado no usuário:

1. **Adicionar Participantes**: O usuário digita um nome no campo de texto e clica em "Adicionar". A lógica JavaScript captura esse nome, o armazena em uma lista interna e atualiza a lista de participantes visível na tela.
  
2. **Sortear**: Após adicionar os nomes, o usuário clica em "Sortear". O script então seleciona aleatoriamente **um** nome da lista de participantes e exibe o resultado diretamente na página.
  
3. **Reiniciar**: A qualquer momento, o usuário pode clicar em "Reiniciar" para limpar todos os dados — tanto a lista interna de nomes quanto as informações exibidas na tela —, permitindo que um novo sorteio comece do zero.
  

3. Lógica e Funcionalidades (JavaScript)

* * *

O código é estruturado em torno de uma variável principal e três funções que manipulam os dados e a interface.

### Variável Global

* `let amigos = [];`
  
  * **Descrição**: Um array (lista) que armazena os nomes de todos os participantes adicionados. Ele serve como a única fonte de dados para as operações de adicionar, sortear e reiniciar.

### Funções Principais

#### `adicionarAmigo()`

* **O que faz**: Adiciona um novo participante à lista e atualiza a exibição na tela.
  
* **Lógica**:
  
  1. Obtém o nome digitado no campo de input.
    
  2. Adiciona o nome ao final do array `amigos`.
    
  3. Limpa o campo de input para facilitar a digitação do próximo nome.
    
  4. Refaz a lista de amigos visível na tela do zero, percorrendo o array `amigos` e criando um item de lista para cada nome.
    

#### `sortearAmigo()`

* **O que faz**: Sorteia aleatoriamente **um único** participante da lista e exibe o resultado na tela.
  
* **Lógica**:
  
  1. Calcula um índice (posição) numérico aleatório, que vai de 0 até o número total de amigos na lista.
    
  2. Usa esse índice para selecionar um nome do array `amigos`.
    
  3. Exibe o nome sorteado diretamente na página com a frase "Seu amigo secreto é: [Nome]".
    

#### `reiniciar()`

* **O que faz**: Reseta completamente a aplicação, limpando todos os dados.
  
* **Lógica**:
  
  1. Esvazia o array `amigos`, removendo todos os nomes.
    
  2. Limpa o conteúdo das áreas de exibição na tela (a lista de amigos e o resultado do sorteio).