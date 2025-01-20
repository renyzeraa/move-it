import style from '../styles/components/experienceBar.module.css'

export function ExperienceBar() {
  return (
    <header className={style.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '40%' }}></div>
        <span className={style.currentExperience} style={{ left: '40%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}