import React from "react"
import "./Swatch.css"

class Swatch extends React.Component {
    colorSelected() {
        this.props.onClickedEvent(this.props.color)
    }

    render() {
        return <div className="swatch" style={{backgroundColor: this.props.color}} onClick={() => this.colorSelected()}></div>
    }
}

export default Swatch;