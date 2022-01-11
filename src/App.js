import { Component } from 'react';
import './App.css';
import CanvasDraw from "react-canvas-draw";
import PubNub from 'pubnub';

const pubnub = new PubNub({
  publishKey: 'pub-c-ca5e94e4-fcc4-458e-986d-ce73de6bf1f3',
  subscribeKey: 'sub-c-b63ff6ae-3d85-11eb-8aa9-b69578166507',
});

pubnub.subscribe({
  channels: ['hello_world']
});

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: "black",
      width: 400,
      height: 400,
      brushRadius: 10,
      lazyRadius: 0,

      coordinates: ''
    }
  };

  componentDidMount = () => {

    pubnub.addListener({

      message: MessageEvent => {

        this.setState({ coordinates: MessageEvent.message })
        }
      },
    )
  };


  changeBlue = () => {
    this.setState({ color: 'blue' })
  };
  changeRed = () => {
    this.setState({ color: 'red' })
  };
  changeYellow = () => {
    this.setState({ color: 'yellow' })
  }
  changeGreen = () => {
    this.setState({ color: 'green' })
  }
  changeBlack = () => {
    this.setState({ color: 'black' })
  }


  onInput() {
    var input = document.getElementById("myRange");
    var currentVal = input.value;
    this.setState({
      brushRadius: currentVal
    })
  };

  logData = () => {
    console.log(this.saveableCanvas.getSaveData())
  };


  sendData = () => {

    pubnub.publish({
      message: this.saveableCanvas.getSaveData(),
      channel: 'hello_world'
    })
  }

  clearData = () => {

    this.saveableCanvas.clear()  

    pubnub.publish({
      message: this.saveableCanvas.getSaveData(),
      channel: 'hello_world'
    })
  }

  render() {

    return (
      <div>
        <div className="maincontainer" >
          <div className="colorwrapper">
            <div id="spacing"></div>
            <b>Choose a color</b>
            <br></br>

            <div id="spacing">
              <div className="black circle" style={{ background: "black" }} onClick={this.changeBlack}></div>
            </div>
            <div id="spacing">
              <div className="blue circle" style={{ background: "blue" }} onClick={this.changeBlue}></div>
            </div>
            <div id="spacing">
              <div className="red circle" style={{ background: "red" }} onClick={this.changeRed}></div>
            </div>
            <div id="spacing">
              <div className="yelow circle" style={{ background: 'yellow' }} onClick={this.changeYellow}></div>
            </div>
            <div id="spacing">
              <div className="green circle" style={{ background: 'green' }} onClick={this.changeGreen}></div>
            </div>
            <br></br>
            <p>adjust brush size </p>

            <div>{this.state.brushRadius}</div>
            <input type="range" min={1} max={20} defaultValue={10} className="slider" id="myRange" onInput={this.onInput.bind(this)}></input>

            <br></br>

            <div className='tools'>

              <div id="button" onClick={this.clearData}>
                Erase
              </div>

              <div id="button"
                onClick={() => {
                  this.saveableCanvas.undo();
                }}>

                Undo Last
          </div>
              <div id="button"
                onClick={this.logData}>
                Log Canvas Coordinates
                </div>
            </div>
          </div>

          <div id="spacing"></div>

          <div className="framecontainer">
            <h1 style={{ marginBottom: '0px' }}>MULTI-USER WHITEBOARD</h1>
            <p style={{ margin: '0px' }}>Start by opening in another device or tab to collaborate</p>

            <div id="drawCanvas" className="frame" onMouseUp={this.sendData}>

              <CanvasDraw
                hideGrid
                style={{ width: '100%', height: '100%' }}
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                saveData={
                  this.state.coordinates
                }
                immediateLoading={true}

              />
            </div>
          </div>
        </div>
      </div >
    )

  };
}

export default App;
