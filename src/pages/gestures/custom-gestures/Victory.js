import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const victoryGesture = new GestureDescription('victory');

victoryGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
victoryGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
victoryGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
victoryGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

victoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
victoryGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
victoryGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
victoryGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

victoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
victoryGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
victoryGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
victoryGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

for(let finger of [Finger.Ring, Finger.Pinky]) {
    victoryGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    victoryGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    victoryGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
    victoryGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}