import React from 'react';
import { trackNames } from '../constants';

function Single({ story, nextStory, prevStory }) {
  return (
    <div className="Single">
      <h1>{story.title}</h1>
      <p>{story.text}</p>
      <b>{nextStory.title}</b>
      <b>{prevStory.title}</b>
    </div>
  )
}

export default Single;