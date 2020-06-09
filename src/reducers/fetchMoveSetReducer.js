export const fetchMoveSetReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVESETS':
            return {
                ...state,
                moveSets: action.payload
            }
        default:
            return state
    }
}