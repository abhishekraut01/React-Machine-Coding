import { useState } from 'react';
import '../App.css'

function ProgressBars() {
const [progress , setProgress] = useState(0)
    return (
        <div className='ProgressBars-box'>
            <h1>Progress bar</h1>
            <div className='testBgColor'>
                {`${progress}%`}
            </div>
            <div className='Button-div'>
                <button>-10%</button>
                <button>+10%</button>
            </div>
        </div>
    );
}

export default ProgressBars;