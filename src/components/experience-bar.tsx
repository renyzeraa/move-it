export function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: '40%' }}></div>
        <span className="current-experience" style={{ left: '40%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  )
}