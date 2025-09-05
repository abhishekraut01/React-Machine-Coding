import { useEffect, useState } from 'react';
import '../App.css'

function ProgressBars() {
    const [progress, setProgress] = useState(0)
    const [color, setColor] = useState("")



    useEffect(() => {
        function handlerColorChange() {
            if (progress <= 30) {
                setColor("red")
            } else if (progress > 30 && progress <= 70) {
                setColor("orange")
            } else if (progress > 70) {
                setColor("green")
            }
        }
        handlerColorChange()
    }, [progress])

    const handleIncreament = () => {
        setProgress((prev) => {
            if (prev < 100) {
                return prev + 10
            } else {
                return 100
            }
        })
    }

    const handleDecreament = () => {
        setProgress((prev) => {
            if (prev > 0) {
                return prev - 10
            } else {
                return 0
            }
        })
    }

    return (
        <div className='ProgressBars-box'>
            <h1>Progress bar</h1>
            <div className='testBgColor'>
                {`${progress}%`}
            </div>
            <div className='Button-div'>
                <button onClick={handleDecreament}>-10%</button>
                <button onClick={handleIncreament}>+10%</button>
            </div>
        </div>
    );
}

export default ProgressBars;