🔘 Pokédex Aleatória (Gen 1)Uma aplicação web leve e responsiva que utiliza a PokeAPI para sortear e exibir informações detalhadas dos 151 Pokémons originais.🚀 FuncionalidadesSorteio Aleatório: Algoritmo que seleciona um ID entre 1 e 151.Consumo de API: Uso de Fetch API com async/await para busca de dados em tempo real.Tratamento de Erros: Mensagens de feedback visual enquanto o Pokémon é carregado ou em caso de falha na rede.Interface Responsiva: Design adaptável para diferentes tamanhos de tela.🛠️ Tecnologias UtilizadasTecnologiaDescriçãoHTML5Estrutura semântica do projeto.CSS3Estilização e layout (Flexbox/Grid).JavaScript (ES6)Lógica de sorteio, consumo de API e manipulação do DOM.PokeAPIFonte de dados RESTful para informações dos Pokémons.📦 Como Instalar e RodarPara testar o projeto localmente, siga os passos abaixo:Clone o repositório:Bashgit clone https://github.com/seu-usuario/pokedex.git
Acesse a pasta:Bashcd pokedex
Inicie o projeto:Basta abrir o arquivo index.html em seu navegador de preferência ou utilizar a extensão Live Server no VS Code.💻 Visualização do Código PrincipalA lógica principal utiliza o conceito de Programação Assíncrona para garantir que a interface não trave enquanto os dados são buscados:JavaScriptasync function buscarPokemon() {
    // ... lógica de sorteio
    const resposta = await fetch(url);
    const dados = await resposta.json();
    exibirPokemon(dados);
}
🎨 Demonstração(Dica: Adicione aqui um GIF ou uma Screenshot do projeto funcionando para atrair mais atenção!)✒️ AutorDesenvolvido com ☕ e código por Isack Otávio de Vasconcelos Souza.