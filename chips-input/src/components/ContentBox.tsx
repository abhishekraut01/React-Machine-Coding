import { useState, type ChangeEvent } from "react"
import Chips from "./Chips"

const ChipsData = [
    {
        
    }
]

const ContentBox = () => {
    const [textData, setTextData] = useState("")

    const handleChnage = (e: any) => {
        e.preventDefault()
        setTextData(e.target.value)
        
    }

    return (
        <div className="flex flex-col h-1/2 w-1/2 bg-red-100 rounded-md p-5">
            <input
                className="py-3 px-3 mb-3 rounded"
                type="text"
                placeholder="Enter here"
                value={textData}
                onChange={(e) => handleChnage(e)}
                onSubmit={()=>{
                    setTextData("")
                }}
            />

            <div className="h-full p-5  gap-5 overflow-x-hidden overflow-y-scroll w-full flex flex-wrap rounded-md bg-green-100">
                <Chips />

            </div>
        </div>
    )
}

export default ContentBox