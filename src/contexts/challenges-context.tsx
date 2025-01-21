"use client"
import { createContext, useState, ReactNode } from "react";

interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  levelUp: VoidFunction;
  startNewChallenge: VoidFunction;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel((prevLevel) => prevLevel + 1);
  }

  function startNewChallenge() {
    console.log("New Challenge");
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp, currentExperience, challengesCompleted, startNewChallenge }}>
      {children}
    </ChallengesContext.Provider>
  );
}
