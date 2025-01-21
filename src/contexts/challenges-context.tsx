"use client"
import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json'

interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  currentExperience: number;
  levelUp: VoidFunction;
  startNewChallenge: VoidFunction;
  resetChallenge: VoidFunction;
  activeChallenge: Challenge | null;
}

interface Challenge {
  type: 'body' | 'eye';
  amount: number;
  description: string;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<null | Challenge>(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel((prevLevel) => prevLevel + 1);
  }

  function startNewChallenge() {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)] as Challenge;
    setActiveChallenge(randomChallenge);
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp, currentExperience, challengesCompleted, startNewChallenge, activeChallenge, resetChallenge, experienceToNextLevel }}>
      {children}
    </ChallengesContext.Provider>
  );
}
