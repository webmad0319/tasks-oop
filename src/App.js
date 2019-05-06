import React from 'react';
import './App.css';
import WelcomeDialog from './WelcomeDialog';
import Dialog from './Dialog';
import ColorPalette from './ColorPalette';
class Task {
  bgColor = "grey"
  
  constructor(name, date) {
    if (name.length < 3)  throw new Error("name too short")

    this.name = name
    this.date = date.toString()
    this.done = false
  }
}

class ShoppingTask extends Task {
  bgColor = "red"

  constructor(name, date) {
    super(name, date)

    this.name = "Shopping activity " + this.name
  }
}


class OutdoorsTask extends Task {
  bgColor = "green"

  constructor(name, date) {
    super(name, date)

    this.name = "Outdoors activity " + this.name
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    
    let allActivities = Array(100).fill(0).map((x, idx) => {
      if (idx % 2 === 0) {
        return new ShoppingTask(("test " + (idx + 1)), new Date())
      } else {
        return new OutdoorsTask(("test " + (idx + 1)), new Date())
      }
    })

    allActivities.push(new Task("test 99999", new Date()))
    allActivities.push(new Task("test 99999-2", new Date()))

    this.state = {
      tasks: allActivities
    }
  }
  render() {
    // return (
    //   <React.Fragment>
    //     {
    //       this.state.tasks.map((task, idx) => 
    //         <div className="task" key={idx} style={{backgroundColor: task.bgColor}}>
    //           {task.name} - {task.date}
    //         </div>
    //       )
    //     }
    //   </React.Fragment>
    // )

    // return (
    //   <React.Fragment>
    //     <Dialog title="Hola" body="this is a test" showOk={true} showCancel={true}></Dialog>
    //     <WelcomeDialog body="this is a test"></WelcomeDialog>
    //     <WelcomeDialog body="hola amigos italianos"></WelcomeDialog>
    //   </React.Fragment>
    // )

    return (
      <React.Fragment>
        <h1>Color Swatches experiment</h1>
        <ColorPalette></ColorPalette>
        <ColorPalette></ColorPalette>
        <ColorPalette></ColorPalette>
        <ColorPalette></ColorPalette>
      </React.Fragment>
    )
  }
}

export default App;
