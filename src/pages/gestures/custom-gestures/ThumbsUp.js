import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const thumbsUpGesture = new GestureDescription('thumbs_up');

thumbsUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thumbsUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
thumbsUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    thumbsUpGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    thumbsUpGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
    thumbsUpGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}