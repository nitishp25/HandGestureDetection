import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const pointLeftGesture = new GestureDescription('point_left');

pointLeftGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
pointLeftGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

pointLeftGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
pointLeftGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
    pointLeftGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    pointLeftGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}