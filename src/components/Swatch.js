import React, { PureComponent as Component } from 'react'

class Swatch extends Component {

  clickHandle(e) {
    this.props.setDetail(e)
  }

  render() {
    return(
      <div className="swatch" style={{backgroundColor: this.props.color.hashcode, animation: `swatches 1.4s ease-in-out -0.0${1000 - (this.props.color.id * 10)}s 1`}} onClick={() => this.clickHandle(this.props.color)} >
        <h5>{this.props.color.name}</h5>
      </div>
    )
  }
}

export default Swatch
