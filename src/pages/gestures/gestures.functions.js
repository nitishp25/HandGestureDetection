import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Webcam from "react-webcam";

import { drawHand } from "./utilities.js";
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

export const webcamRef = null;
export const canvasRef = null;

export var emoji = null;

export const images = { 
    thumbs_up: thumbs_up, 
    victory: victory, 
    i_love_you: i_love_you,
    point_left: point_left,
    point_right: point_right,
    okay: okay 
};

export const runHandpose = async () => {
  const net = await handpose.load();
  setInterval(() => {
    detect(net);
  }, 300);
};

const detect = async (net) => {
    if (
      typeof webcamRefvariable.current !== "undefined" &&
      webcamRefvariable.current !== null &&
      webcamRefvariable.current.video.readyState === 4
    ) {
      const video = webcamRefvariable.current.video;
      const videoWidth = webcamRefvariable.current.video.videoWidth;
      const videoHeight = webcamRefvariable.current.video.videoHeight;

      webcamRefvariable.current.video.width = videoWidth;
      webcamRefvariable.current.video.height = videoHeight;

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

          emoji = gesture.gestures[maxScore].name;
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
};