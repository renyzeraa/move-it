"use client"

import { useState, useEffect } from 'react'
import styles from '../styles/components/countdown.module.css'

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const second = time % 60;

  const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
  const [leftSecond, rightSecond] = String(second).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
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

      <button
        type='button'
        className={styles.countdownButton}
        onClick={startCountdown}
        disabled={active}
      >
        Iniciar um ciclo
        <img src="/icons/play.svg" alt="icone play" />
      </button>
    </div>
  )
}