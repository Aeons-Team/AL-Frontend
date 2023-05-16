import { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import SideText from '../SideText'
import { useAppStore } from '../../data/AppStore'
import metamaskVideo from '../../assets/metamask.mp4'
import fundingVideo from '../../assets/funding.mp4'
import uploadVideo from '../../assets/upload.mp4'
import privateVideo from '../../assets/private.mp4'
import * as S from './style'

export default function Features() {
    const pathMotion = useMotionValue(0)

    useEffect(() => {
        useAppStore.subscribe(() => {
            pathMotion.set(useAppStore.getState().scrollFeatures)
        })
    }, [])

    return (
        <S.Features id='features'>
            <S.Svg viewBox="0 0 1000 6580" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M-8.5 22.5H3.5C7.36599 22.5 10.5 25.634 10.5 29.5V1621.52C10.5 1627.04 14.9647 1631.51 20.4795 1631.52L978.52 1633.48C984.035 1633.49 988.5 1637.96 988.5 1643.48V3247.98C988.5 3253.51 984.01 3257.99 978.479 3257.98L24.0205 3256.02C18.4897 3256.01 14 3260.49 14 3266.02V4858.95C14 4864.49 18.5085 4868.98 24.0514 4868.95L977.449 4864.05C982.991 4864.02 987.5 4868.51 987.5 4874.05V6578.5" />
            </S.Svg>

            <S.Svg viewBox="0 0 1000 6580" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path style={{ pathLength: pathMotion }} d="M-8.5 22.5H3.5C7.36599 22.5 10.5 25.634 10.5 29.5V1621.52C10.5 1627.04 14.9647 1631.51 20.4795 1631.52L978.52 1633.48C984.035 1633.49 988.5 1637.96 988.5 1643.48V3247.98C988.5 3253.51 984.01 3257.99 978.479 3257.98L24.0205 3256.02C18.4897 3256.01 14 3260.49 14 3266.02V4858.95C14 4864.49 18.5085 4868.98 24.0514 4868.95L977.449 4864.05C982.991 4864.02 987.5 4868.51 987.5 4874.05V6578.5" />
            </S.Svg>

            <S.Feature id='feature-1'>
                <S.FeatureTitle>
                    Connect via <S.Span>Metamask</S.Span>
                </S.FeatureTitle>
                
                <S.FeatureText>
                    Aeons uses <S.Span>Metamask</S.Span> to connect to the <S.Span>Bundlr network</S.Span> and pay for storage.
                </S.FeatureText>

                <S.Tablet id='tablet-1'>
                    <S.ButtonOne />
                    <S.ButtonTwo />

                    <S.TabletVideo autoPlay loop muted>
                        <source src={metamaskVideo} />
                    </S.TabletVideo>
                </S.Tablet>

                <SideText top='150vh' right='2rem' rightTablet='1.5rem' rightMobile='1rem' data-scroll data-scroll-speed='1'>
                    All operations are<br/>
                    recorded into the <S.Span>blockweave</S.Span><br />
                    with <S.Span>0 Transaction fee</S.Span>
                </SideText>
            </S.Feature>

            <S.Feature right id='feature-2'>
                <S.FeatureTitle>
                    <S.Span>Organize and manage</S.Span> your files efficiently
                </S.FeatureTitle>
                
                <S.FeatureText>
                    <S.Span>Aeons</S.Span> lets you create folders, move files between folders, rename files and more!
                </S.FeatureText>
                    
                <S.Tablet id='tablet-2'>
                    <S.ButtonOne />
                    <S.ButtonTwo />

                    <S.TabletVideo autoPlay loop muted>
                        <source src={uploadVideo} />
                    </S.TabletVideo>
                </S.Tablet>

            </S.Feature>

            <S.Feature id='feature-3'>
                <S.FeatureTitle>
                    Store your files <S.Span>securely</S.Span>
                </S.FeatureTitle>
                
                <S.FeatureText>
                    <S.Span>Aeons</S.Span> lets you create private files that can only be accessed and shared by you.
                </S.FeatureText>

                <S.Tablet id='tablet-3'>
                    <S.ButtonOne />
                    <S.ButtonTwo />

                    <S.TabletVideo autoPlay loop muted>
                        <source src={privateVideo} />
                    </S.TabletVideo>
                </S.Tablet>
            </S.Feature>

            <S.Feature right id='feature-4'>
                <S.FeatureTitle>
                    Pay using <S.Span>ERC20</S.Span> tokens
                </S.FeatureTitle>
                
                <S.FeatureText>
                    Aeons lets you pay for storage with ethereum and other <S.Span>ERC20</S.Span> tokens like matic.
                </S.FeatureText>

                <S.Tablet id='tablet-4'>
                    <S.ButtonOne />
                    <S.ButtonTwo />
                    
                    <S.TabletVideo autoPlay loop muted>
                        <source src={fundingVideo} />
                    </S.TabletVideo>
                </S.Tablet>
            </S.Feature>
        </S.Features>
    )
}
