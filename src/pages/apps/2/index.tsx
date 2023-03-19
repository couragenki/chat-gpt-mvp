import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { PageTemplate } from "@/components/pageTemplate";
import axios from "axios";
import { Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";

const API_URL = "https://api.openai.com/v1/";
const MODEL = "gpt-3.5-turbo";

const APP2COMPONENT = () => {
  // メッセージの状態管理用のステート
  const [message, setMessage] = useState("");
  // 回答の状態管理用のステート
  const [answer, setAnswer] = useState("");
  // 会話の記録用のステート
  const [conversation, setConversation] = useState<
    { role: string; content: string }[]
  >([]);
  // ローディング表示用のステート
  const [loading, setLoading] = useState(false);
  // 前回のメッセージの保持、比較用
  const prevMessageRef = useRef("");

  // 回答が取得されたとき
  useEffect(() => {
    // 直前のチャット内容
    const newConversation = [
      {
        role: "assistant",
        content: answer,
      },
      {
        role: "user",
        content: message,
      },
    ];

    // 会話の記録(直前のチャット内容の追加)
    setConversation([...conversation, ...newConversation]);

    // メッセージの消去(フォームのクリア)
    setMessage("");
  }, [answer]);

  // フォーム送信時の処理
  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // APIリクエスト中はスルー
      if (loading) return;

      // APIリクエストを開始する前にローディング表示を開始
      setLoading(true);

      try {
        // API リクエスト
        const response = await axios.post(
          `${API_URL}chat/completions`,
          {
            model: MODEL,
            messages: [
              ...conversation,
              {
                role: "user",
                content: message,
              },
            ],
          },
          {
            // HTTPヘッダー(認証)
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
          }
        );

        // 回答の取得
        setAnswer(response.data.choices[0].message.content.trim());
      } catch (error) {
        // エラーハンドリング
        console.error(error);
      } finally {
        // 後始末
        setLoading(false); // ローディング終了
        prevMessageRef.current = message; // 今回のメッセージを保持
      }
    },
    [loading, message, conversation]
  );

  interface ChatProps {
    prevMessage: string;
    answer: string;
  }
  // チャット内容
  const ChatContent: React.FC<ChatProps> = React.memo(
    ({ answer }) => {
      return (
        <div className="result">
          <div className="current-answer">
            <Typography variant="subtitle1">
              回答:
            </Typography>
            <p>
              {answer
                .split(/\n/)
                .map((item: React.ReactNode, index: React.Key) => {
                  return <React.Fragment key={index}>{item}<br /></React.Fragment>;
                })}
            </p>
          </div>
        </div>
      );
    }
  );

  ChatContent.displayName = "ChatContent";

  const setMessege = ''

  // フォームの表示
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>
            学習したい項目を以下の選択肢から選択してください
          </FormLabel>
          <RadioGroup>
            <FormControlLabel
              value="マーケティングを学習したいです"
              control={
                <Radio
                  onChange={(e) => {
                    setMessage(setMessege.concat(e.target.value));
                  }}
                />
              }
              label="マーケティング"
            />
            <FormControlLabel
              value="財務会計を学習したいです"
              control={
                <Radio
                  onChange={(e) => {
                    setMessage(setMessege.concat(e.target.value));
                  }}
                />
              }
              label="財務会計"
            />
            <FormControlLabel
              value="マネジメントを学習したいです"
              control={
                <Radio
                  onChange={(e) => {
                    setMessage(setMessege.concat(e.target.value));
                  }}
                />
              }
              label="マネジメント"
            />
          </RadioGroup>
          <div className="submit">
            <Button type="submit" variant="outlined" disabled={!message}>
              質問する
            </Button>
          </div>
        </FormControl>
      </form>

      {loading && (
        <div className="loading">
          <CircularProgress />
        </div>
      )}

      {answer && !loading && (
        <ChatContent prevMessage={prevMessageRef.current} answer={answer} />
      )}
    </div>
  );
};

export default function App2() {
  return (
    <div className={styles.app2}>
      <PageTemplate>
        <Typography variant="h5" component="h2">
          学びたいジャンルを選択するとAIが学習方法をレコメンドしてくれます
        </Typography>
        <APP2COMPONENT />
      </PageTemplate>
    </div>
  );
};

