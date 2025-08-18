import { useState } from 'react'

type useToggeleType = [boolean , ()=>void] 

export default function useToggle(initialState = false):useToggeleType{
    const [isOn , setIsOn] = useState(initialState)

    function toggle(){
        setIsOn((prev) => !prev)
    }

    return [ isOn , toggle ]
}