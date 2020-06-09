function fetchingMoveSets() {
    return (dispatch) => {
        fetch('http://localhost:3001/move_sets')
        .then(resp => resp.json())
        .then(moveSets => dispatch(fetchedMoveSets(moveSets)))
    }
}

function fetchedMoveSets(moveSets) {
    console.log(moveSets)
    return {
        type: 'FETCH_MOVESETS',
        payload: moveSets
    }
}

export default fetchingMoveSets