import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const loveYouGesture = new GestureDescription('i_love_you');

loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1);

loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1);

loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1);

for(let finger of [Finger.Middle, Finger.Ring]) {
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, 1);
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 1);
}