import { useContext } from 'react'
import styles from '../styles/components/profile.module.css'
import { ChallengesContext } from '@/contexts/challenges-context'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/renyzeraa.png" alt="Foto perfil" />
      <div>
        <strong>Renan Silva</strong>
        <p>
          <img
            src="icons/level.svg"
            alt="Nível do GitHub"
          />
          Level {level}
        </p>
      </div>
    </div>
  )
}