import React, { useState, useEffect } from "react";
import tw from "twin.macro";

const CountdownWrapper = tw.span`hidden sm:flex text-primary text-xs justify-center lg:justify-start`;
const PrimaryButton = tw.button`font-medium px-2 py-2 rounded bg-gray-800 text-gray-100 pointer-events-none`;
const CounterRow = tw.div`flex flex-row justify-center`;
const CounterCol = tw.div`flex flex-col w-16`;
const Text = tw.span`text-gray-900 font-secondary`;

export const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-05-27T18:00:00+05:30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: new Intl.NumberFormat("fr-FR").format(
          Math.floor(difference / (1000 * 60 * 60))
        ),
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
        <>
          <CounterCol>
            <CounterRow>
              <PrimaryButton>{timeLeft.days}</PrimaryButton>
            </CounterRow>
            <CounterRow>
              <Text>&nbsp; days &nbsp;</Text>
            </CounterRow>
          </CounterCol>
          <CounterCol>
            <CounterRow>
              <PrimaryButton>{timeLeft.hours}</PrimaryButton>
            </CounterRow>
            <CounterRow>
              <Text>&nbsp; hours &nbsp;</Text>
            </CounterRow>
          </CounterCol>
          <CounterCol>
            <CounterRow>
              <PrimaryButton>{timeLeft.minutes}</PrimaryButton>
            </CounterRow>
            <CounterRow>
              <Text>&nbsp; minutes &nbsp;</Text>
            </CounterRow>
          </CounterCol>
          <CounterCol>
            <CounterRow>
              <PrimaryButton>{timeLeft.seconds}</PrimaryButton>
            </CounterRow>
            <CounterRow>
              <Text>&nbsp; seconds &nbsp;</Text>
            </CounterRow>
          </CounterCol>
        </>
      ) : (
        <div>Time is up 👰🤵</div>
      )}
    </CountdownWrapper>
  );
};

export default Countdown;

// return (
//   <CountdownWrapper>
//     {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
//       <CounterCol>
//         <CounterRow>
//           <PrimaryButton>{timeLeft.days}</PrimaryButton>
//           <PrimaryButton>{timeLeft.hours}</PrimaryButton>
//           <PrimaryButton>{timeLeft.minutes}</PrimaryButton>
//           <PrimaryButton>{timeLeft.seconds}</PrimaryButton>
//         </CounterRow>
//         <CounterRow>
//           <Text>&nbsp; days &nbsp;</Text>
//           <Text>&nbsp; hours &nbsp;</Text>
//           <Text>&nbsp; minutes &nbsp;</Text>
//           <Text>&nbsp; seconds &nbsp;</Text>
//         </CounterRow>
//       </CounterCol>
//     ) : (
//       <p>Time is up 👰🤵</p>
//     )}
//   </CountdownWrapper>
// );
// };
