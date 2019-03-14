import React, { PureComponent } from 'react';
import shortid from 'shortid';

class Background extends PureComponent {
  render() {
    const { colors } = this.props;
    console.log(this.props)
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
}

export default Background;