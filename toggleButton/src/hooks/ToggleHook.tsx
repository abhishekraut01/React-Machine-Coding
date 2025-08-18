import { useState } from 'react'

export default function useToggle(initialState = false){
    const [isOn , setIsOn] = useState(initialState)

    function toggle(){
        setIsOn((prev) => !prev)
    }

    return [ isOn , toggle ]
}