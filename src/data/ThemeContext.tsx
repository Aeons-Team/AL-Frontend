import { PropsWithChildren } from 'react'
import { ThemeContext } from 'styled-components'

export const theme = {
    colors: {
        primary: '#15111a',
        primary2: '#0A090C',
        secondary: '#e0e0e0',
        black: '#000000',
        active: '#2d9bd6',
        chatMessage: '#5c3bef',
        primary3d: '#0c0a0e',
        active3d: '#127894',
        activeLight3d: '#1d7cb8',
        object3d: '#0A090E',
        background3d: '#15111a',
        textDark: '#50445f',
        background: '#040e12',
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