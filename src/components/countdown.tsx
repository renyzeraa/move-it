"use client"

import { useContext } from 'react';
import styles from '../styles/components/countdown.module.css'
import { CountdownContext } from '@/contexts/countdown-context';

export function Countdown() {
  const { minutes, seconds, hasFinished, active, resetCountdown, startCountdown } = useContext(CountdownContext);

  const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{leftMinute}</span>
          <span>{rightMinute}</span>
        </div>
        <span>:</span>
        <div>
          <span>{leftSecond}</span>
          <span>{rightSecond}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          data-state="check"
          className={styles.countdownButton}
          disabled
        >
          Ciclo encerrado
          <img src="/icons/check-circle.svg" alt="icone check" />
        </button>
      ) : (
        <>
          {active ? (
            <button
              data-state="close"
              type='button'
              className={styles.countdownButton}
              onClick={resetCountdown}
            >
              Abandornar Ciclo
              <img src="/icons/close.svg" alt="icone close" />
            </button>
          ) : (
            <button
              data-state="play"
              type='button'
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="/icons/play.svg" alt="icone play" />
            </button>
          )}
        </>
      )}
    </div>
  )
}