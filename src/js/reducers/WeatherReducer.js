export const FETCH_WEATHER = 'FETCH_WEATHER'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]  // state.concat([action.payload.data]) = [city, city, city]
    default:
      return state
  }
}