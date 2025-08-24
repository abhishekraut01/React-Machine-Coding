# Greeting App Problem Description

Create a **modern React application** that displays a real-time greeting message based on the current hour of the day and updates the **local time every second**.

---

## Functional Requirements

### Greeting Message Logic
- **5 AM to 12 PM:** `Good Morning! ☀️`
- **12 PM to 5 PM:** `Good Afternoon! 🌤️`
- **5 PM to 9 PM:** `Good Evening! 🌆`
- **9 PM to 5 AM:** `Good Night! 🌙✨`

### Live Time Display
- Show user's local time using `toLocaleTimeString()`.
- Update every second with `setInterval`.

### Visual Layout
- Dark background.
- Bright time card.
- Responsive and centered.

### Testability
- Greeting element uses: `data-testid="greeting"`
- Time display uses: `data-testid="time"`

---

## Edge Cases & Constraints

- Automatic transition between greetings at time boundaries.
- Support for both 24-hour and 12-hour system times.
- `setInterval` is cleared on component unmount.
- Ensure emojis and greeting logic do **not overlap**.
- Greeting changes seamlessly, no user interaction required.

---

## Examples

**Example 1:**  
System Time: `2025-05-27T08:30:00`  
Display Output: `Good Morning! ☀️ 08:30:00 AM`

**Example 2:**  
System Time: `2025-05-27T21:45:00`  
Display Output: `Good Night! 🌙✨ 09:45:00 PM`
