export function getLayers (payload) {
    console.log(payload)
    return {
        type: 'GET_LAYERS',
        payload
    }
}