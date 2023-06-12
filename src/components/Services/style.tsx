import styled from 'styled-components'


export const Services = styled.div`
    height: 180vh;  
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;
    position: relative;
    padding: 10rem 6rem;
    gap: 2rem;
    @media (max-width: 1000px) {
        padding: 10rem 2rem;
    }
    @media (max-width: 550px) {
        padding: 10rem 1rem;
    }`
export const Card = styled.div`


border-radius: 30px;
padding: 1.8%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;


`

export const SectionS = styled.div`
    item-align:center;
    height: 100vh;
    display: flex;
    
    


`

export const Maintext = styled.div`
    font-weight: 200;
    font-size: 5rem;
    text-align:center;
    @media (max-width: 1000px) {
        font-size: 3.5rem;
    }
    @media (max-width: 550px) {
        font-size: 2.5rem;
    }

`

export const tImage = styled.div`
width: 80%;
border-radius: 1rem;
  img {
    width: 100%;
    size: cover;
    
    border-radius: 1rem;
  }

`
export const TabletImmage = styled.image<any>`
size: cover;
border-radius: 12px;
`

export const Tablet = styled.div<any>`
    border-radius: 30px;
    background-image: url(${props => props.img})
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25);
    padding: 1.8%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: calc(100% - 100px);

    @media (max-width: 1000px) {
        width: 100%;
    }
`


export const Text = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    @media (max-width: 1000px) {
        font-size: 1.3rem;
    }
    @media (max-width: 550px) {
        font-size: 1rem;
    }
`


export const Span = styled.span`
    font-size:2rem;
    color: ${props => props.theme.colors.active};
    }
`
