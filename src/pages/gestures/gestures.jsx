import React, { useRef, useState, useEffect } from "react";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Webcam from "react-webcam";

import { drawHand } from "./utilities";
import { loveYouGesture } from './custom-gestures/LoveYou.js';
import { pointLeftGesture } from './custom-gestures/PointLeft.js';
import { pointRightGesture } from './custom-gestures/PointRight.js';
import { okayGesture } from './custom-gestures/Okay.js';
import { victoryGesture } from "./custom-gestures/Victory.js";
import { thumbsUpGesture } from "./custom-gestures/ThumbsUp.js";

import victory from "./images/victory.png";
import thumbs_up from "./images/thumbs_up.png";
import i_love_you from "./images/i_love_you.png";
import point_left from "./images/point_left.png";
import point_right from "./images/point_right.png";
import okay from "./images/okay.png";

import "./gestures.styles.scss";

const Gestures = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { 
    thumbs_up: thumbs_up, 
    victory: victory, 
    i_love_you: i_love_you, 
    point_left: point_left,
    point_right: point_right,
    okay: okay 
  };

  const names = { 
    thumbs_up: "THUMBS UP", 
    victory: "VICTORY", 
    i_love_you: "I LOVE YOU", 
    point_left: "POINT LEFT",
    point_right: "POINT RIGHT",
    okay: "OKAY" 
  };

  const runHandpose = async () => {
    const net = await handpose.load();
    setInterval(() => {
      detect(net);
    }, 10);
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

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          thumbsUpGesture,
          victoryGesture,
          loveYouGesture,
          pointLeftGesture,
          pointRightGesture,
          okayGesture
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {

          const score = gesture.gestures.map(
            (prediction) => prediction.score
          );
          const maxScore = score.indexOf(
            Math.max.apply(null, score)
          );

          setEmoji(gesture.gestures[maxScore].name);
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(()=>{runHandpose()},[]);

  return (
    <div className="gestures">
        <h1>Gesture Detection and Translation</h1>

        <Webcam ref={webcamRef} className="webcam" />

        <canvas ref={canvasRef} className="canvas" />

        {emoji !== null ? (
          <div className="translation">
            <h3 className="name">{names[emoji]}</h3> 

            <img src={images[emoji]} className="emoji" />
          </div>
          ) : ( ""
        )}
    </div>
  );
}

export default Gestures;