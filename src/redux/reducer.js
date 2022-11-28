const initialState = {
  layers: ['https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554']
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_LAYERS':

      return {
        ...state,
        layers: [...state.layers, action.payload]
      }

    default:
      return { ...state }
  }
}

export default rootReducer
