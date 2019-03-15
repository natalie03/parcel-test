import React from 'react';
import { trackNames } from '../constants';

function MainMenu({ handleClick }) {
  return (
    <div className="MainMenu">
      <button onClick={() => handleClick(trackNames.VALUES)}>Explore Amgen Values</button>
      <button onClick={() => handleClick(trackNames.RESPONSIBILITIES)}>Explore Amgen Responsibilities</button>
      Main menu!
    </div>
  )
}

export default MainMenu;