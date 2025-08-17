
import './App.css'


// ✅ Complete the custom hook below
// function useToggle(initialValue = false) {
//   // your code here
// }

export default function App() {
  // ✅ Use the custom hook inside this component
  // const [isOn, toggle] = useToggle(false);

  return (
    /* your toggle function for the onClick method */
    <button data-testid="toggle-button">
      {/* Render "ON" or "OFF" based on state */}
    </button>
  );
}
