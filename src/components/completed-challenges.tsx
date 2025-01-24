"use client"

import { useContext } from 'react';
import styles from '../styles/components/completedChallenges.module.css'
import { ChallengesContext } from '@/contexts/challenges-context';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}