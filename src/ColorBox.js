import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    return (
      const opacity = this.props.opacity;
      <div className="color-box" style={{opacity: opacity}}>
        if (opacity >= 0.2){
          <ColorBox opacity={opacity - 0.1} />
        }else{
          return null
        }
      </div>
    )
  }

}
