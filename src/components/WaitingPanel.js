import React, { useEffect, useState } from 'react'
import '../styles/WaitingPanel.css'

const WaitingPanel = () => {
    const [progress, setProgress] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            if(progress < 99){
                setProgress(progress + 1.7) 
            }
            }, 1000);
         return () => clearInterval(interval);
    },[progress])
    return(
        <div className='waiting-panel-wrapper'>
            <div className='bar-wrapper'>
                <div className='bar-text'>{Math.round(progress) + '%'}</div>
                <div style={{width:progress + '%'}} className='bar-content'></div>
            </div>
            <div className='waiting-panel-text'>
                Please be patient! We are using a free host server for the backend and it can take up to one minute for the page to load!
            </div>
        </div>
    )
}
export default WaitingPanel