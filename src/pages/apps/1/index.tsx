import React, { useState } from "react";
import styles from "./styles.module.scss";
import { PageTemplate } from "@/components/pageTemplate";
import Chat from "@/components/Chat";

export default function App1() {
  return (
    <div className={styles.app1}>
      <PageTemplate>
        <div>自由にチャットで質問ができます</div>
        <Chat />
      </PageTemplate>
    </div>
  );
};

