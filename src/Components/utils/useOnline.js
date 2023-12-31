import React, { useEffect } from 'react'
import { useState } from 'react'
export const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)
    // const [isOffline, setIsOffline] = useState(true)
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true)
        }
        const handleOffline = () => {
            setIsOnline(false)
        }
        window.addEventListener("online",
            handleOnline
        )
        window.addEventListener("offline", handleOffline)
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }

    }, [])
    return isOnline
}
