"use client";

import { useContext } from "react";
import style from "../styles/components/experienceBar.module.css";
import { ChallengesContext } from "@/contexts/challenges-context";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel) + "%";

  return (
    <header className={style.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: percentToNextLevel }}></div>
        <span className={style.currentExperience} style={{ left: percentToNextLevel }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
