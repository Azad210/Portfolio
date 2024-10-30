document.addEventListener('DOMContentLoaded', (event) => {
    const selectedPokemon = localStorage.getItem('selectedPokemon');

    if (selectedPokemon) {
        const pokemonData = JSON.parse(selectedPokemon);

        const statsPrimaryDiv = document.getElementById('pokemon-overskrift-billede');
        const statsSecondaryDiv = document.getElementById('pokemon-info');
        statsPrimaryDiv.innerHTML = `
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
            <h1>${pokemonData.name}</h1>
        `;
        statsSecondaryDiv.innerHTML = `
            <p><strong>Base Experience:</strong> ${pokemonData.base_experience}</p>
            <p><strong>Vægt:</strong> ${pokemonData.weight}</p>
            <p><strong>Højde:</strong> ${pokemonData.height}</p>
            <p><strong>Typer:</strong> ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            <p><strong>Evner:</strong> ${pokemonData.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
        `;
    } else {
        alert('Ingen Pokémon data fundet!');
        window.location.href = 'index.html';
    }
});


