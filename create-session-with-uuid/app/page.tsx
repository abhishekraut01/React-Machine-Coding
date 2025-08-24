import { useRouter } from 'next/router';
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("")
  const router = useRouter()
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleNewRoom = () => {
    const uuid = createRoomId()
    router.push(`/session/${uuid}`);
  }

  const handleJoinSession = () => {
    const uuid = createRoomId()
    router.push(`/session/${uuid}`);
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
   
    </div>
  );
}
