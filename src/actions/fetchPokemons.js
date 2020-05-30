function fetchingPokemons() {
    return (dispatch) => {
        fetch('http://localhost:3001/pokemons')
        .then(resp => resp.json())
        .then(pokemons => dispatch(fetchedPokemons(pokemons)))
    }
}

function fetchedPokemons(pokemons) {
    return {
        type: "FETCH_POKEMON",
        payload: pokemons
    }
}

export default fetchingPokemons