import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Skills from "./components/Skills";

const NavigationHeadings = [
  {
    title: "Profile",
    component: Profile,
  },
  {
    title: "Skills",
    component: Skills,
  },
  {
    title: "Settings",
    component: Settings,
  },
];

export default function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [data , setData] = useState({
    name:String,
    
  })
  const CurrentComponent = NavigationHeadings[currentTab].component;

  return (
    <div className="h-screen w-full bg-red-300 overflow-hidden">
      <Navbar headings={NavigationHeadings} setCurrentTab={setCurrentTab} />
      <CurrentComponent />
    </div>
  );
}
