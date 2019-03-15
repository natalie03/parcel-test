export const actionTypes = {
  SELECT_ITEM: 'SELECT_ITEM',
  SET_SCREEN: 'SET_SCREEN',
  SET_TRACK: 'SET_TRACK'
};

export function selectItem(payload) {
  return {
    type: actionTypes.SELECT_ITEM,
    payload: payload
  }
}

export function setScreen(payload) {
  return {
    type: actionTypes.SET_SCREEN, 
    payload: payload
  }
}

export function setTrack(payload) {
  return {
    type: actionTypes.SET_TRACK, 
    payload: payload
  }
}