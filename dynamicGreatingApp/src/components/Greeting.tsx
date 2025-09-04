import React, { useState, useEffect } from "react";

// Emoji icons based on time periods
function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return { text: "Good Morning", emoji: "☀️" };
  } else if (hour >= 12 && hour < 17) {
    return { text: "Good Afternoon", emoji: "🌤️" };
  } else if (hour >= 17 && hour < 21) {
    return { text: "Good Evening", emoji: "🌆" };
  } else {
    return { text: "Good Night", emoji: "🌙" };
  }
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
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.5s",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          borderRadius: "24px",
          padding: "2.5rem 2rem",
          width: "345px",
          textAlign: "center",
          color: "#22223B",
          position: "relative",
        }}
      >
        <div style={{
          fontSize: "2.8rem",
          marginBottom: "0.8rem",
          fontWeight: "700",
          letterSpacing: "1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.6rem",
        }}>
          <span
            style={{
              animation: "float 1.2s infinite alternate",
              fontSize: "2.4rem"
            }}
          >
            {greetingObj.emoji}
          </span>
          {greetingObj.text}
        </div>
        <div style={{
          fontSize: "1.45rem",
          opacity: 0.93,
          letterSpacing: "0.5px",
          fontWeight: "500",
          marginTop: "0.3rem",
          transition: "all 0.3s"
        }}>
          {time.toLocaleTimeString()}
        </div>
      </div>
      <style>
        {`
          @keyframes float {
            0%   { transform: translateY(0px);}
            100% { transform: translateY(-10px);}
          }
        `}
      </style>
    </div>
  );
}
