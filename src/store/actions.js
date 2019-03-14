export const actionTypes = {
  SET_SCREEN: 'SET_SCREEN',
  SET_TRACK: 'SET_TRACK'
};

export function setScreen(payload) {
  return {
    type: 'SET_SCREEN', 
    payload: payload
  }
}

export function setTrack(payload) {
  return {
    type: 'SET_TRACK', 
    payload: payload
  }
}