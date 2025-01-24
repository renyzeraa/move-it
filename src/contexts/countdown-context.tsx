"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./challenges-context";

interface CountDownContextData {
  seconds: number;
  minutes: number;
  active: boolean;
  hasFinished: boolean;
  resetCountdown: VoidFunction;
  startCountdown: VoidFunction;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountDownContextData);

const initialTime = 25 * 60;
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(initialTime);
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setActive(false);
    setTime(initialTime);
    setHasFinished(false);
  }

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
    else if (active && time === 0) {
      setHasFinished(true)
      setActive(false)
      startNewChallenge();
    }
  }, [active, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        active,
        hasFinished,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}