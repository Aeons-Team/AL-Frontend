import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Hero = styled.div`
    color: white;
`
    
export const Title = styled(motion.div)`
    position: absolute;
    width: 10rem;
    height: 0rem;
    left: 10rem;
    top: 20rem;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 275;
    font-size: 7em;
    line-height: 5rem;
`;

export const Text = styled(motion.p)`
    position: absolute;
    width: 100rem;
    height: 0rem;
    left: 10rem;
    top: 28rem;
    font-size: 1.7em;
    line-height: 2rem;
`;

export const Maintext = styled(motion.div)`
    position: absolute;
    width: 20rem;
    height: 0rem;
    left: 10rem;
    bottom: 18rem;
    font-size: 1.3em;
    line-height: 2rem;
`;

export const Sidetext = styled(motion.div)`
    position: absolute;
    width: 17rem;
    height: 0rem;
    right: 3rem;
    bottom: 25rem;
    font-size: 1.3rem;
    line-height: 2rem; 
`;

export const Span = styled.span`
    color: ${props => props.theme.colors.active};
`;   

