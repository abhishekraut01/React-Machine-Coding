import { useRouter } from 'next/router';
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("")
  const router = useRouter()
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleClick = ()=>{
    router.push('/session');
  }

  const createRoomId

  return (
    <div>
      <input
        onChange={(e) => handleInputChange(e)}
        className="px-3 py-2 rounded-md"
        value={inputText}
        type="text" />
      <button 
      className='bg-purple-400 px-3 py-2 rounded-2xl'
      onClick={handleClick}
      >
        Join Session
      </button>
    </div>
  );
}
