import { useContext } from 'react'
import styles from '../styles/components/levelUpModal.module.css'
import { ChallengesContext } from '@/contexts/challenges-context'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay} onClick={closeLevelUpModal}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type='button' onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar" />
        </button>
      </div>
    </div>
  )
}