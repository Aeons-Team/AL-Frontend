import { PropsWithChildren } from 'react'
import { ThemeContext } from 'styled-components'

export const theme = {
    colors: {
        primary: '#19141F',
        primary2: '#0A090C',
        secondary: '#ffffff',
        black: '#000000',
        active: '#5c3bef',
        chatMessage: '#4453f6',
        primary3d: '#0c0a0e',
        active3d: '#6130ff',
        activeLight3d: '#e1cfff',
        object3d: '#0A090E',
        background3d: '#773AE8',
        textDark: '#50445f',
        background: '#0F0B16'
    },
    
    chatTransition: {
        type: 'spring',
        stiffness: 150,
        damping: 21
    }
}

export default function ThemeContextProvider({ children }: PropsWithChildren) {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}