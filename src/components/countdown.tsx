"use client"

import { useState, useEffect } from 'react'
import styles from '../styles/components/countdown.module.css'

let countdownTimeout: NodeJS.Timeout;
const initialTime = 0.1 * 60;

export function Countdown() {
  const [time, setTime] = useState(initialTime);
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const second = time % 60;

  const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(second).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setActive(false);
    setTime(initialTime);
  }

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
    if (active && time <= 0) {
      setHasFinished(true)
      setActive(false)
    }
  }, [active, time])

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