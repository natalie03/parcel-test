import React from 'react';
import shortid from 'shortid';

function Background({ colors }) {

  const style = (index) => {
    return { 
      backgroundImage: `linear-gradient(${colors[index][0]}, ${colors[index][1]})`
    }
  };

  return (
    <div>
      {colors.map((color, index) => (
        <div className="background" key={shortid.generate()} style={style(index)} />
      ))}
    </div>
  )
}

export default Background;