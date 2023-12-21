'use client'

import { useNotification } from '@/state/notificationContext'

export default function Notification() {
    const notification = useNotification()
    const style = notification?.status === "error" ? {backgroundColor: "#fde8e8", color: "#dd6e6e"} : {backgroundColor: "#def7ec", color: "#1f7d61"}
    
    if (!notification) return null
    
    return (
        <div style={style} className='h-max w-[90%] max-w-5xl p-4 rounded-md shadow-md fixed top-5 inset-0 mx-auto font-bold'>
            {notification.message}
        </div>
    )
}