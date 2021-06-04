import React from "react";
import "modern-normalize/modern-normalize.css";

import Profile from "./components/Profile/Profile";
import Statistic from "./components/Statistics/Statistics";
import FriendsList from "./components/Friends/FriendsList";
import Transactions from "./components/Transactions/Transactions";

import user from "./user.json";
import statistical from "./statistical-data.json";
import friends from "./friends.json";
import transactionsData from "./components/Transactions/transactions.json";

import styles from "./App.module.css";

const App = () => (
  <div className={styles.wrapper}>
    <Profile user={user} />
    <Statistic statistical={statistical} title={"Upload stats"} />
    <FriendsList friends={friends} />
    <Transactions transactionsData={transactionsData} />
  </div>
);
export default App;
