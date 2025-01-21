import { ChallengesProvider } from "@/contexts/challenges-context";
import { Profile } from "@/components/profile";
import { ExperienceBar } from "@/components/experience-bar";
import { CompletedChallenges } from "@/components/completed-challenges";
import { Countdown } from "@/components/countdown";
import { ChallengeBox } from "@/components/challenge-box";
import styles from "../styles/pages/home.module.css";

export default function Home() {
  return (
    <ChallengesProvider>
      <main className={styles.container}>
        <ExperienceBar />
        <section className={styles.homeContainer}>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </main>
    </ChallengesProvider>
  );
}
