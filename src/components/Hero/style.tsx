import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Hero = styled.div`
    color: white;
`
    
export const Title = styled(motion.div)`
    position: absolute;
    width: 10vw;
    height: 0vw;
    left: 10vw;
    top: 15vw;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 275;
    font-size: 7vw;
    line-height: 5rem;
`;

export const Text = styled(motion.p)`
    position: absolute;
    width: 100vw;
    height: 0vw;
    left: 10vw;
    top: 23vw;
    font-size: 1.5vw;
    line-height: 2rem;
`;

export const Maintext = styled(motion.div)`
    position: absolute;
    width: 15vw;
    height: 0vw;
    left: 10vw;
    bottom: 18vw;
    font-size: 1vw;
    line-height: 1.5vw;
`;

export const Sidetext = styled(motion.div)`
    position: absolute;
    width: 17vw;
    height: 0vw;
    right: 3vw;
    bottom: 25vw;
    font-size: 1vw;
    line-height: 1.5vw; 
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`;   

