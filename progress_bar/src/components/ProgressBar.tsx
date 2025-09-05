import { useEffect, useState } from 'react';
import '../App.css';

function ProgressBars() {
    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState('');

    useEffect(() => {
        if (progress <= 30) setColor('red');
        else if (progress <= 70) setColor('orange');
        else setColor('green');
    }, [progress]);

    const handleIncrement = () => setProgress(prev => Math.min(prev + 10, 100));
    const handleDecrement = () => setProgress(prev => Math.max(prev - 10, 0));

    return (
        <div className="ProgressBars-box">
            <h1>Progress bar</h1>
            <div className="progressBarParent">
                <div
                    className="progressFill"
                    style={{
                        width: `${progress}%`,
                        backgroundColor: color,
                    }}
                />
                <div className="progressText">{progress}%</div>
            </div>
            <div className="Button-div">
                <button onClick={handleDecrement}>-10%</button>
                <button onClick={handleIncrement}>+10%</button>
            </div>
        </div>
    );
}

export default ProgressBars;
