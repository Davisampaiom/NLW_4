import styles from "../styles/components/Profile.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/71107984?v=4"
        alt="Davisampaiom"
      />

      <div>
        <strong>Davisampaiom</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
