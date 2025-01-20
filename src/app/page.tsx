import { ExperienceBar } from "@/components/experience-bar";
import { Profile } from "@/components/profile";
import { Metadata } from "next";
import styles from '../styles/pages/home.module.css'
import { CompletedChallenges } from "@/components/completed-challenges";
import { Countdown } from "@/components/countdown";

export const metadata: Metadata = {
  title: "Início | move.it"
};

export default function Home() {
  return (
    <main className={styles.container}>
      <ExperienceBar />
      <section className={styles.homeContainer}>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </main>
  )
}
