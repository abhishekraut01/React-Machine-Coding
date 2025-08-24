"use client"

import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("")
  const [errorText , setErrorText] = useState("")
  const router = useRouter();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleNewRoom = () => {
    const uuid = createRoomId()
    router.push(`/session/${uuid}`);
  }

  const handleJoinSession = () => {
    if(inputText.length !== 5 ){
      setErrorText("Seesion Id should be 5 character long")
    }
    router.push(`/session/${inputText}`);
  }

  const createRoomId = () => {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  };

  return (
    <div>
      <input
        onChange={(e) => handleInputChange(e)}
        className="px-3 py-2 rounded-md"
        value={inputText}
        type="text" />
      <button
        className='bg-purple-400 px-3 py-2 rounded-2xl'
        onClick={handleJoinSession}
      >
        Join Session
      </button>

      <button
        className='bg-purple-400 px-3 py-2 rounded-2xl'
        onClick={handleNewRoom}
      >
        Create Session
      </button>
      <p>{errorText}</p>

    </div>
  );
}
