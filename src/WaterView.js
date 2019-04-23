import React from 'react';

const WaterView = (props) => {
    return(
    <div>
        <button onClick={props.toggle}>{props.hideShow} div!</button>
        <div style={props.style}>{props.waterForm}</div>
    </div>
    )

}

export default WaterView;