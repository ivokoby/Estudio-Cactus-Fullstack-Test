const initialState = {
    layers: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_LAYERS':

            return {
                ...state,
                layers: [...state.layers, action.payload]
            }

        default:
            return {...state}
    }
}

export default rootReducer