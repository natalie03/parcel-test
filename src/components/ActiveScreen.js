import React, { useReducer} from 'react';
import { initialState, reducer, selectItem, setScreen, setTrack } from '../store';
import { screenNames } from '../constants';
import { MainMenu, TrackMenu } from './index';

function ActiveScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTrackAndLocation(track) {
    console.log(track);
    dispatch(setTrack(track));
  }

  function selectItem(index) {
    dispatch(selectItem(index));
  }

  function renderScreen() {
    const { screenName } = state;
    switch (screenName) {
      case screenNames.MAIN_MENU:
        return (
          <MainMenu handleClick={setTrackAndLocation} />
        )
      case screenNames.TRACK_MENU: 
        return (
          <TrackMenu track={state.track} />
        )
      default: return null
    }
  }
  return (
    renderScreen()
  )
  
}

export default ActiveScreen;