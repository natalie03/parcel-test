import React from 'react';
import shortid from 'shortid';
import mockData from '../store/mockData.js';

function TrackMenu({ track }) {
  const trackItems = mockData[track.toLowerCase()];
  return (
    <div className="TrackMenu">
      Track Menu {track}
      {trackItems.map((item, index) => 
        <button onClick={() => console.log(item)} key={shortid.generate()}>{item.title}</button>
      )}
    </div>
  )
}

export default TrackMenu;