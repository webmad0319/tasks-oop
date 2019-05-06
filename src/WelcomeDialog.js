import React from "react"
import "./Dialog.css"
import Dialog from "./Dialog";

class WelcomeDialog extends React.Component {
    render() {
        return (
            <Dialog title="Welcome" body={this.props.body} showOk />
        )
    }
}

export default WelcomeDialog;