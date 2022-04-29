import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const pointUpGesture = new GestureDescription('point_up');

pointUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pointUpGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
pointUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

pointUpGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pointUpGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    pointUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    pointUpGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    pointUpGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
    pointUpGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}