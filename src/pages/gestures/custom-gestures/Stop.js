import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const stopGesture = new GestureDescription('stop');

for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    stopGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    stopGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    stopGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
    stopGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}