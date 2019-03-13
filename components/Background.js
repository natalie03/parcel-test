import React from 'react';

function Background({ colors }) {

  const style = (index) => {
    return { 
      backgroundImage: `linear-gradient(${colors[index][0]}, ${colors[index][1]})`
    }
  };

  return (
    <>
      <div className="background"
        style={style(0)}
      />
      <div className="background"
        style={style(1)}
      />
    </>
  )
}

export default Background;