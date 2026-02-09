const pokeballs = document.querySelectorAll(".pokeballButton");
const starterImage = document.querySelector("#Starter");

pokeballs.forEach(pokeball => {

    pokeball.addEventListener("click", () => {

        const pokemonName = pokeball.dataset.pokemon;

        switch (pokemonName) {

            case 'Bulbasur':
                starterImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
                break;

            case 'Charmander':
                starterImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';
                break;

            case 'Squirtle':
                starterImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
                break;
        }
    });
});
