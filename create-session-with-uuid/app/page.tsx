"use client";

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [errorText, setErrorText] = useState("");
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setErrorText(""); 
  };

  const createRoomId = () => {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  };

  const handleNewRoom = () => {
    const uuid = createRoomId();
    router.push(`/session/${uuid}`);
  };

  const handleJoinSession = () => {
    if (inputText.length !== 5) {
      setErrorText("Session Id should be 5 characters long");
      return;
    }
    router.push(`/session/${inputText}`);
  };

  return (
    <div className="h-screen w-full flex flex-col gap-3 pl-3 justify-center">
     <div className='flex gap-3'>
       <input
        placeholder="Enter Session Id"
        onChange={handleInputChange}
        className="px-3 py-2 rounded-xl border-purple-400 border-1"
        value={inputText}
        type="text"
      />
      <button
        className="bg-purple-400 px-3 py-2 rounded-2xl cursor-pointer"
        onClick={handleJoinSession}
      >
        Join Session
      </button>
      <button
        className="bg-purple-400 px-3 py-2 rounded-2xl cursor-pointer"
        onClick={handleNewRoom}
      >
        Create Session
      </button>
     </div>
      <p style={{ color: "red" }}>{errorText}</p>
    </div>
  );
}
