import { useState, type ChangeEvent } from "react";
import { colorNameToHex } from "./colorData";

function App() {

  const [inputText, setInputText] = useState<string>("")
  const [currentColor, setCurrentColor] = useState<string>("")
  const [hexValue, setHexValue] = useState<string>("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSearch = () => {

    if (inputText.trim()) {
      const colorInSmallLetter = inputText.trim().toLocaleLowerCase()
      const hex = colorNameToHex(colorInSmallLetter)

      if (hex) {
        setCurrentColor(inputText.trim());
        setHexValue(hex);
      } else {
        // Handle invalid color
        setCurrentColor("Invalid Color");
        setHexValue("N/A");
      }
    }
  }


  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="h-[500px] w-[400px] flex flex-col justify-center shadow-xl items-center bg-[#F0F0F0] gap-10 p-6  rounded-lg">
        <h1 className="text-4xl text-green-900 font-bold" >color explorer</h1>

        <div className="flex   gap-3">
          <input
            value={inputText}
            onChange={ handleInputChange}
            onKeyDown={handleOnKeyPress}
            className="border-1 py-2 px-5 w-70 rounded-md bg-white font-semibold" type="text" placeholder="Type a color name e.g. lavender" />
          <button
            onClick={handleSearch}
            className="bg-white py-2 px-3 rounded-md flex justify-center items-center hover:scale-105 ">
            <h1 className="text-xl cursor-pointer" >🔍</h1>
          </button>
        </div>

        <div className="h-[100%] w-[100%] flex shadow-2xl flex-col justify-center items-center gap-3 bg-white  rounded-md hover:scale-101 transition-all  ">
          <div
            style={{
              backgroundColor: hexValue && hexValue !== "N/A" ? hexValue : '#f3f4f6'
            }}
            className={`h-[150px] w-[150px] shadow-sm rounded-full border-4 border-[#F0F0F0]`}>

          </div >
          <div className="font-bold text-xl">
            <h2 > Name : {currentColor}</h2>
            <h3>Hex :{hexValue} </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
