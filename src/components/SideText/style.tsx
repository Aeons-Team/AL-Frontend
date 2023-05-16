import styled, { css } from 'styled-components'

export interface SideTextProps {
    top?: string
    left?: string
    right?: string
    bottom?: string
    topTablet?: string
    leftTablet?: string
    rightTablet?: string
    bottomTablet?: string
    topMobile?: string
    leftMobile?: string
    rightMobile?: string
    bottomMobile?: string
}

export const SideText = styled.span<SideTextProps>`
    position: absolute;
    font-weight: 300;
    z-index: 5;
    
    ${props => props.top && css<SideTextProps>`
        top: ${props => props.top};
    `}
    ${props => props.left && css<SideTextProps>`
        left: ${props => props.left};
    `}
    ${props => props.right && css<SideTextProps>`
        right: ${props => props.right};
    `}
    ${props => props.bottom && css<SideTextProps>`
        bottom: ${props => props.bottom};
    `}
    
    @media (max-width: 1000px) {
        ${props => props.topTablet && css<SideTextProps>`
            top: ${props => props.topTablet};
        `}
        ${props => props.leftTablet && css<SideTextProps>`
            left: ${props => props.leftTablet};
        `}
        ${props => props.rightTablet && css<SideTextProps>`
            right: ${props => props.rightTablet};
        `}
        ${props => props.bottomTablet && css<SideTextProps>`
            bottom: ${props => props.bottomTablet};
        `}
    }

    @media (max-width: 550px) {
        font-size: 0.85rem;

        ${props => props.topMobile && css<SideTextProps>`
            top: ${props => props.topMobile};
        `}
        ${props => props.leftMobile && css<SideTextProps>`
            left: ${props => props.leftMobile};
        `}
        ${props => props.rightMobile && css<SideTextProps>`
            right: ${props => props.rightMobile};
        `}
        ${props => props.bottomMobile && css<SideTextProps>`
            bottom: ${props => props.bottomMobile};
        `}
    }   
`