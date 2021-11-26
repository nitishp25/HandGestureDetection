import React, { useRef, useState } from 'react';

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from 'fingerpose';

import { drawHand } from "./utilities";
import thumbsup from './images/thumbsup.png';
import victory from './images/victory.png';

import "./App.css";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { thumbsup: thumbsup, victory: victory }

  const runHandpose = async () => {
    const net = await handpose.load();
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      if(hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          fp.Gestures.VictoryGesture,
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if(gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const score = gesture.gestures.map((prediction) => prediction.score);
          const maxScore = score.indexOf(Math.max.apply(null, score));

          setEmoji(gesture.gestures[maxScore].name);
          console.log(emoji);
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  runHandpose();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
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

        {emoji !== null ? <img source={images[emoji]} style={{
            bottom: 500,
            height: 100,
            left: 400,
            marginLeft: "auto",
            marginRight: "auto",
            position: "absolute",
            right: 0,
            textAlign: "center"
          }}/> 
          : ""  
        }
      </header>
    </div>
  );
}

export default App;