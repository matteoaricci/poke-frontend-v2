export const fetchPokeReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POKEMON':
            return {
                ...state,
                pokemons: action.payload
            }
        default:
            return state
    }
}