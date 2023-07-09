// Evento onclick para obtener datos de Mercado Libre
document.getElementById("MercadoLibre").onclick = function() {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=telefonos')
    .then(response => response.json())
    .then(data => {
        const items = data.results;

      // Crear la lista y agregar los elementos
        const lista = document.createElement('ul');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            lista.appendChild(li);
        });

      // Agregar la lista al elemento con el id "resultado"
        const resultado = document.getElementById('resultado');
        resultado.appendChild(lista);
    })
    .catch(error => console.error('Error:', error));
};

// Evento onclick para obtener datos de Pokemon
document.getElementById("Pokemon").onclick = function() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(data => {
        const abilities = data.abilities.map(ability => ability.ability.name);
        const moves = data.moves.map(move => move.move.name);

        const pokemonInfoList = document.createElement('ul');
        const nameItem = document.createElement('li');
        nameItem.textContent = `Name: ${data.name}`;
        pokemonInfoList.appendChild(nameItem);

        const heightItem = document.createElement('li');
        heightItem.textContent = `Height: ${data.height} decimetres`;
        pokemonInfoList.appendChild(heightItem);

        const weightItem = document.createElement('li');
        weightItem.textContent = `Weight: ${data.weight} hectograms`;
        pokemonInfoList.appendChild(weightItem);

        const abilitiesItem = document.createElement('li');
        abilitiesItem.textContent = `Abilities: ${abilities.join(', ')}`;
        pokemonInfoList.appendChild(abilitiesItem);

        const movesItem = document.createElement('li');
        movesItem.textContent = `Moves: ${moves.join(', ')}`;
        pokemonInfoList.appendChild(movesItem);

        const pokemonInfo = document.getElementById('pokemonInfo');
        pokemonInfo.appendChild(pokemonInfoList);
    })
    .catch(error => {
        console.log('Error:', error);
    });
};