import React, { useState, useEffect } from "react";

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) return { text: "Good Morning", emoji: "☀️" };
  if (hour >= 12 && hour < 17) return { text: "Good Afternoon", emoji: "🌤️" };
  if (hour >= 17 && hour < 21) return { text: "Good Evening", emoji: "🌆" };
  return { text: "Good Night", emoji: "🌙" };
}

export default function Greeting() {
  const [time, setTime] = useState(new Date());
  const greetingObj = getGreeting(time.getHours());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(8px)",
          borderRadius: "24px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.11)",
          padding: "2.5rem 2rem",
          maxWidth: "360px",
          width: "100%",
          textAlign: "center",
          color: "#22223B",
        }}
      >
        <div style={{
          fontSize: "2.6rem",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "1px",
          gap: "0.6rem"
        }}>
          <span style={{ fontSize: "2.2rem" }}>{greetingObj.emoji}</span>
          {greetingObj.text}
        </div>
        <div style={{
          fontSize: "1.45rem",
          opacity: 0.93,
          letterSpacing: "0.5px",
          fontWeight: "500",
          marginTop: "0.8rem",
        }}>
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
