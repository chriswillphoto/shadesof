import React, { PureComponent as Component } from 'react'
import axios from 'axios'

import Swatch from './Swatch'
import Details from './Details'

class Viewer extends Component {
  constructor(props){
    super(props)

    this.state = {
      colors: null,
      details: false
    }

    axios.get("http://localhost:5000/colors.json").then( res => {
      this.setState({colors: res.data})
    } )
  }


  render(){
    if(!this.state.colors){
      return(
        <div className="viewer" id="loading">
          <h1>Loading...</h1>
        </div>
      )
    }else{
      return(
        <div className="viewer">
          {this.state.colors.map( color => {
            return <Swatch color={color} key={color.id} setDetail={(i) => this.setState({details: i}) }/>
          } )}

          {this.state.details && <Details color={this.state.details} detailClick={() => this.setState({details: false})}/> }
        </div>
      )
    }

  }

}

export default Viewer
