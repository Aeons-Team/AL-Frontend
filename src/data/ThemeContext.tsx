import { PropsWithChildren } from 'react'
import { ThemeContext } from 'styled-components'

export const theme = {
    colors: {
        primary: '#18161d',
        primary2: '#0A090C',
        secondary: '#ffffff',
        black: '#000000',
        active: '#5c3bef',
        chatMessage: '#4453f6',
        primary3d: '#0c0a0e',
        background: '#0a080b'
    }
}

export default function ThemeContextProvider({ children }: PropsWithChildren) {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}