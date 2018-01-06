import React from 'react'

const Details = (props) => {

  return(
    <div className="detail-viewer-container">
      <div className="detail-viewer">
        <div className="close-detail" onClick={props.detailClick} >X</div>
        <div className="detail-banner" style={{backgroundColor: props.color.hashcode}}>
          <h4>{props.color.name}</h4>
        </div>
        <h5>Color Codes</h5>
        <h6>{props.color.hashcode}</h6>
        <h6>{props.color.rgbcode}</h6>
        <h5>Description</h5>
        <p>{props.color.description}</p>
      </div>
    </div>
  )
}

export default Details
