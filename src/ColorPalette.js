import React from "react"
import Swatch from "./Swatch";
import "./ColorPalette.css"

class ColorPalette extends React.Component {
    state = {
        colors: [
            "#ffcc00",
            "#ff0000",
            "#cccccc",
            "#00ff00",
            "#fabada",
            "#ffcc00",
            "#ff0000",
            "#cccccc",
            "#00ff00",
            "#fabada",
            "#ffcc00",
            "#ff0000",
            "#cccccc",
            "#00ff00",
            "#fabada"
        ]
    }

    onSwatchClicked(color) {
        this.setState({
            ...this.state,
            chosenColor: color
        })
    }

    render() {
        return (
            <div className="colorPalette">
                <ul >
                    {
                        this.state.colors.map((color, idx) => <li key={idx}><Swatch color={color} onClickedEvent={() => this.onSwatchClicked(color, idx)}></Swatch></li>)
                    }
                </ul>
                <p>Selected Color: {this.state.chosenColor}</p>
            </div>
        )
    }
}

export default ColorPalette;