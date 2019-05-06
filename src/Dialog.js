import React from "react"
import "./Dialog.css"

class Dialog extends React.Component {
    render() {
        return (
            <div className="dialog">
                <h1>{this.props.title}</h1>
                <section>
                    {this.props.body}
                </section>
                <footer>
                {
                        this.props.showOk && <button>OK</button>
                    }
                    {
                        this.props.showCancel && <button>Cancel</button>
                    }
                </footer>
            </div>
        )
    }
}

export default Dialog;