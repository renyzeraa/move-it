import { ExperienceBar } from "@/components/experience-bar";
import { Profile } from "@/components/profile";
import { Metadata } from "next";
import styles from '../styles/pages/home.module.css'

export const metadata: Metadata = {
  title: "Move.it | Index"
};

export default function Home() {
  return (
    <main className={styles.container}>
      <ExperienceBar />
      <section className={styles.homeContainer}>
        <Profile />
        <div>

        </div>
      </section>
    </main>
  )
}
