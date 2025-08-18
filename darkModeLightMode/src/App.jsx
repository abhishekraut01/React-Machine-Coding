import React, {  useState } from 'react';
import './App.css'

function useToggle(initialInput = false) {
  const [isOn, setIsOn] = useState(initialInput)

  function toggle() {
    setIsOn((prev) => !prev)
  }
  return [isOn , toggle]
}

function DarkModeToggle() {
  const [isOn, toggle] = useToggle(false)
  
  return (
    <div className={`container ${isOn ? 'dark-mode' : 'light-mode'}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container ">
        <label className="switch">
          <input type="checkbox"
            onClick={() => {
              toggle()
            }}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{isOn ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;