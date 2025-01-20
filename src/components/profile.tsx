import styles from '../styles/components/profile.module.css'

export function Profile() {
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
          Level 1
        </p>
      </div>
    </div>
  )
}