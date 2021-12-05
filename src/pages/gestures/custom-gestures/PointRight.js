import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const pointRightGesture = new GestureDescription('point_right');

pointRightGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

pointRightGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pointRightGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    pointRightGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    pointRightGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}