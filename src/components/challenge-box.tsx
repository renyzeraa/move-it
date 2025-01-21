"use cliente"

import { ChallengesContext } from '@/contexts/challenges-context';
import styles from '../styles/components/challenge-box.module.css'
import { useContext } from 'react';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  const srcIcon = `/icons/${activeChallenge?.type}.svg`

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={srcIcon} alt="Ganhe experiência" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type='button'
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type='button'
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="/icons/level-up.svg" alt="Level up" />
            Avance de level completando os desafios.
          </p>
        </div>
      )
      }
    </div >
  )
}