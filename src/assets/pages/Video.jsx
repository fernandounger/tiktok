import React, { useRef, useState } from 'react'
import "./video.css"

export default function Video(){

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart(){

        if(play == false){
            videoRef.current.play()
            setPlay(true)
        } else {
            videoRef.current.pause()
            setPlay(false)
        }
        
    }

    return (
        <div className='video'>
            <video 
                className="video__player"
                ref={videoRef}
                onClick={handdleStart}
                loop
                src=''
            >
            </video>
        </div>
    )
}