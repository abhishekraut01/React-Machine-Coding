import { useState, type ChangeEvent } from "react"
import Chips from "./Chips"
interface Ichips {
    id: number,
    text: string
}


const ChipsData: Ichips[] = [

]

const ContentBox = () => {
    const [textData, setTextData] = useState("")
    const [chips, setChips] = useState<Ichips[]>(ChipsData)


    const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
        setTextData(e.target.value)
    }

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()
        setChips((prev)=> [...prev , {
            id:Date.now(),
            text:textData
        }])
        setTextData("")
    }

    const handleRemove = (id: number) => {
        setChips(chips.filter(x => x.id !== id)) 
    }

    return (
        <div className="flex flex-col h-1/2 w-1/2 bg-red-100 rounded-md p-5">
            <form onSubmit={handleAdd}>
                <input
                    className="py-3 px-3 mb-3 rounded w-full"
                    type="text"
                    placeholder="Enter here"
                    value={textData}
                    onChange={(e) => handleChnage(e)}

                />
            </form>

            <div className="h-full p-5  gap-5 overflow-x-hidden overflow-y-scroll w-full flex flex-wrap rounded-md bg-green-100">
                {
                    chips.map((chip) => {
                        return <Chips
                            key={chip.id}
                            text={chip.text}
                            id={chip.id}
                            handleRemove={handleRemove}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default ContentBox