'use client'

import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return action.payload
            break
        case "RESTART":
            return null
        default:
            return state
    }
}

export const NotificationContext = createContext()

export const NotificationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notificationReducer, null)

    const createNotification = (notification) => {
        dispatch({ type: "CREATE", payload: notification })
        setTimeout(() => {
            dispatch({ type: "RESTART", payload: null })
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={[state, createNotification]}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const stateAndDispatch = useContext(NotificationContext)
    return stateAndDispatch[0]
}

export const useDispatch = () => {
    const stateAndDispatch = useContext(NotificationContext)
    return stateAndDispatch[1]
}

