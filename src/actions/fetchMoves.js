function fetchingMoves() {
    return (dispatch) => {
        fetch('http://localhost:3001/moves')
        .then(resp => resp.json())
        .then(moves => dispatch(fetchedMoves(moves)))
    }
}

function fetchedMoves(moves) {
    return {
        type: 'FETCH_MOVES',
        payload: moves
    }
}

export default fetchingMoves