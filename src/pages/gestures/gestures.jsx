import React from "react";

import Webcam from "react-webcam";

import { runHandpose, images, webcamRefvariable, canvasRef, emoji } from "./gestures.functions.js";
import Spinner from '../../components/spinner/spinner.component';

import "./gestures.styles.scss";

class Gestures extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    await runHandpose();

    this.setState({ loading: false });
  }

  render() {
    if(this.state.loading) {
      return <Spinner />
    }

    return (
      <div className="App">
        <header className="App-header">
            <Webcam
              ref={webcamRefvariable}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />

            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zindex: 9,
                width: 640,
                height: 480,
              }}
            />

            {emoji !== null ? (
              <img
                src={images[emoji]}
                alt="emojis"
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 400,
                  bottom: 100,
                  right: 0,
                  textAlign: "center",
                  height: 100,
                }}
              />
            ) : (
              ""
            )}
        </header>
      </div>
    );
  }
}

export default Gestures;