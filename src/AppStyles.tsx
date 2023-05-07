import styled from 'styled-components'
import { motion } from 'framer-motion'

export const UIContainer = styled.main`

`

export const AppMain = styled(motion.div)`
    color: ${props => props.theme.colors.secondary};
`

export const App = styled.div`

`