import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const okayGesture = new GestureDescription('okay');

okayGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.75);
okayGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
okayGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
// okayGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
// okayGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

okayGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.75);
okayGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
okayGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
// okayGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
// okayGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    okayGesture.addCurl(finger, FingerCurl.NoCurl, 0.75);
    okayGesture.addDirection(finger, FingerDirection.VerticalUp, 0.5);
    okayGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
    okayGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}