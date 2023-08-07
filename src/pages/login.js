import styles from "../styles/Login.module.css";
import React from "react";
import { GoogleSquareFilled, GithubOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signIn } from "next-auth/react";
export default function Login() {
  return (
    <div>
      <Link href="/">
        <h1
          style={{
            width: "400px",
            padding: "20px",
            color: "hsl(186 100% 69%)",
          }}
        >
          PH_PC BUILDER
        </h1>
      </Link>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          className={styles.glowing_btn}
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://pc-builder-sepia.vercel.app/",
            })
          }
        >
          <span className={styles.glowing_txt}>
            <GoogleSquareFilled style={{ padding: "10px", fontSize: "20px" }} />
            LogIn <span className={styles.faulty_letter}>With </span>Google
          </span>
        </button>
        <button
          className={styles.glowing_btn}
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://pc-builder-sepia.vercel.app/",
            })
          }
        >
          <span className={styles.glowing_txt}>
            <GithubOutlined style={{ padding: "10px", fontSize: "20px" }} />{" "}
            LogIn <span className={styles.faulty_letter}>With </span>Github
          </span>
        </button>
      </div>
    </div>
  );
}
