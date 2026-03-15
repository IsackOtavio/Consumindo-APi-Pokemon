const botao = document.getElementById('btn-sortear');
const container = document.getElementById('pokemon-container');

async function buscarPokemon() {
    const idAleatorio = Math.floor(Math.random() * 151) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;

    try {
        container.innerHTML = "<p>Procurando na grama alta...</p>";
        
        const resposta = await fetch(url);
        
        // Verifica se a resposta foi bem sucedida
        if (!resposta.ok) throw new Error('Pokemon não encontrado');
        
        const dados = await resposta.json();

        exibirPokemon(dados);

    } catch (erro) {
        console.error("Erro ao buscar Pokémon:", erro);
        container.innerHTML = "<p>Ops! Ocorreu um erro ao carregar o Pokémon.</p>";
    }
}

function exibirPokemon(pokemon) {
    container.innerHTML = `
        <div class="pokemon-card">
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h3>${pokemon.name.toUpperCase()}</h3>
            <p><strong>ID:</strong> #${pokemon.id}</p>
            <p><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
        </div>
    `;
}

botao.addEventListener('click', buscarPokemon);