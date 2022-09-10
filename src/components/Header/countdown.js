import React, { useState, useEffect } from "react";
import tw from "twin.macro";

const CountdownWrapper = tw.span`text-primary text-xs`;
const PrimaryButton = tw.button`font-medium px-2 py-2 rounded bg-primary text-gray-100 pointer-events-none`;
const Text = tw.span`text-gray-900`;

export const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-05-27T18:00:00+05:30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <CountdownWrapper>
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
          <PrimaryButton>{timeLeft.days}</PrimaryButton>
          <Text>&nbsp; days &nbsp;</Text>
          <PrimaryButton>{timeLeft.hours}</PrimaryButton>
          <Text>&nbsp; hours &nbsp;</Text>
          <PrimaryButton>{timeLeft.minutes}</PrimaryButton>
          <Text>&nbsp; minutes &nbsp;</Text>
          <PrimaryButton>{timeLeft.seconds}</PrimaryButton>
          <Text>&nbsp; seconds &nbsp;</Text>
        </p>
      ) : (
        <p>Time is up 👰🤵</p>
      )}
    </CountdownWrapper>
  );
};

export default Countdown;
