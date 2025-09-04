import  { useState, useEffect } from "react";

function getGreeting(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good Morning! ☀️";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon! 🌤️";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening! 🌆";
  } else {
    return "Good Night! 🌙✨";
  }
}

export default function Greeting() {
  const [time, setTime] = useState(new Date());
  const [greeting, setGreeting] = useState(getGreeting(time.getHours()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now);
      setGreeting(getGreeting(now.getHours()));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "#18181B",
      color: "#fff",
      borderRadius: "10px",
      width: "320px",
      margin: "100px auto",
      padding: "2rem",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <div data-testid="greeting" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        {greeting}
      </div>
      <div data-testid="time" style={{ fontSize: "1.2rem", marginTop: "0.6rem" }}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}
