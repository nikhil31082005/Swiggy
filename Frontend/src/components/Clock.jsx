import React from 'react'
import { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let idd = setInterval(function () {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        // cleanup function
        return () => clearInterval(idd)
    }, [])

    return (
        <div>Time Right Now:  {time} </div>
    )
}

export default Clock