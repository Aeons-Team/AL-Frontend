import { PropsWithChildren } from 'react'
import { ThemeContext } from 'styled-components'

export const theme = {
    colors: {
        primary: '#15111a',
        primary2: '#0A090C',
        secondary: '#e0e0e0',
        black: '#000000',
        active: '#5c3bef',
        chatMessage: '#5c3bef',
        primary3d: '#0c0a0e',
        active3d: '#6130ff',
        activeLight3d: '#e1cfff',
        object3d: '#0A090E',
        background3d: '#15111a',
        textDark: '#50445f',
        background: '#130D1D',
        red: '#fc3d63',
        green: '#2bed8c'
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