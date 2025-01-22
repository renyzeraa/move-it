"use client"
import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from '../../challenges.json'

interface ChallengesContextData {
  level: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  currentExperience: number;
  levelUp: VoidFunction;
  startNewChallenge: VoidFunction;
  resetChallenge: VoidFunction;
  completeChallenge: VoidFunction;
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

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel((prevLevel) => prevLevel + 1);
  }

  function startNewChallenge() {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)] as Challenge;
    setActiveChallenge(randomChallenge);

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${randomChallenge.amount}xp`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount
    if (finalExperience >= experienceToNextLevel) {
      levelUp()
      finalExperience = finalExperience - experienceToNextLevel
    }
    setChallengesCompleted((prevChallengesCompleted) => prevChallengesCompleted + 1)
    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp, currentExperience, challengesCompleted, startNewChallenge, activeChallenge, resetChallenge, experienceToNextLevel, completeChallenge }}>
      {children}
    </ChallengesContext.Provider>
  );
}
