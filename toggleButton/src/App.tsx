import './App.css'
import useToggle from './hooks/ToggleHook'

export default function App() {
  const [isOn , toggle] = useToggle(false)
  return (
    <div style={{
      backgroundColor:`${isOn ? "black" : "white"}`,
      height:"100vh" ,
      width:"100vw",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <button data-testid="toggle-button" onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  )
}