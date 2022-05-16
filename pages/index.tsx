import type { NextPage } from "next";

import WalletBar from "../src/components/WalletBar";
import ClickerInteraction from "../src/components/ClickerInteraction/ClickerInteraction";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <WalletBar />
      <ClickerInteraction />
    </div>
  );
};

export default Home;
