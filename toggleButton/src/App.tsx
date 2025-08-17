import { useState } from "react";
import "./App.css";

function useToggle(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  function toggle() {
    setIsOn(prev => !prev);
  }

  return [isOn, toggle];  // correct order: state first, then updater
}

export default function App() {
  const [isOn, toggle] = useToggle(false);

  return (
    <button data-testid="toggle-button" onClick={toggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
