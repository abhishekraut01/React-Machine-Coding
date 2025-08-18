import './App.css'
import useToggle from './hooks/ToggleHook'

export default function App() {
  const [isOn , toggle] = useToggle(false)

  return (
    <div>
      <button data-testid="toggle-button" onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  )
}