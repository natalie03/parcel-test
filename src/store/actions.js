export const actionTypes = {
  SET_SCREEN: 'SET_SCREEN'
};

export function setScreen(payload) {
  return {
    type: 'SET_SCREEN', 
    payload: payload
  }
}