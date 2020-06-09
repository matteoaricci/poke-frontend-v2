export const fetchMoveReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVES':
        return {
            ...state,
            moves: action.payload
        }

        default:
            return state
    }
}