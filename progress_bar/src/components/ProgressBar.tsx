import { useState } from 'react';
import '../App.css'

function ProgressBars() {
    const [progress, setProgress] = useState(0)

    const handleIncreament = () => {
        setProgress((prev) => {
            if(prev === 100){
                prev + 10
            }
        })
    }

    const handleDecreament = () => {
        setProgress((prev) => prev - 10)
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