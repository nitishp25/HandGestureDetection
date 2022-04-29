import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const yesGesture = new GestureDescription('yes');

yesGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
yesGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    yesGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    yesGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
    yesGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
    yesGesture.addDirection(finger, FingerDirection.DiagonalDownLeft, 1.0);
    yesGesture.addDirection(finger, FingerDirection.DiagonalDownRight, 1.0);
}