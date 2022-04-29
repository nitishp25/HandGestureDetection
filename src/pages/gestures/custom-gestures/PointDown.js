import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const pointDownGesture = new GestureDescription('point_down');

pointDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pointDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
pointDownGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

pointDownGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pointDownGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    pointDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    pointDownGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
    pointDownGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
    pointDownGesture.addDirection(finger, FingerDirection.DiagonalDownLeft, 1.0);
    pointDownGesture.addDirection(finger, FingerDirection.DiagonalDownRight, 1.0);
}