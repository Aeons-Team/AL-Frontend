import { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import SideText from '../SideText'
import { useAppStore } from '../../data/AppStore'
import * as S from './style'
import servicessImage from '../../assets/ss.jpg'
import dataImage from '../../assets/dat.jpg'
import dataText from '../../assets/per.jpg'
import FinalServicess from '../../assets/pc.jpg'

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

            <S.Feature id='about-1'>
                <S.FeatureTitle >
                Who We Are: Empowering Businesses with Exceptional IT Solutions
                </S.FeatureTitle>
                
                <S.FeatureText   >
                At <S.Span>Avabi Union</S.Span>, we are a team of dedicated professionals committed to delivering exceptional IT solutions tailored to meet the unique needs of our clients. With years of industry expertise and a passion for innovation, we strive to empower businesses to achieve their goals and stay ahead in the rapidly evolving technological landscape
                </S.FeatureText>
                
                <S.Tablet id='tablet-1'>
                    <S.tImage >               
                        <img src={servicessImage} />
                    </S.tImage>
                   
                    
                </S.Tablet>

                <SideText top='150vh' right='2rem' rightTablet='1.5rem' rightMobile='1rem' data-scroll data-scroll-speed='1' >
                    
                Stay ahead of the curve with our <S.Span> cutting-edge data</S.Span> analytics and services
                </SideText>
            </S.Feature>

            <S.Feature right id='about-2'>
                <S.FeatureTitle>
                Our Approach:
                </S.FeatureTitle>
                
                <S.FeatureText>
                We believe in a collaborative and client-centric approach to IT solutions. <S.Span>We work closely with our clients</S.Span> to understand their specific requirements, challenges, and aspirations. By building strong partnerships, we ensure that our solutions align perfectly with their business objectives, helping them drive growth, streamline operations, and gain a competitive edge.
                </S.FeatureText>
                    
                <S.Tablet id='tablet-2'>
                    <S.tImage >               
                        <img src={dataImage} />
                    </S.tImage>
                    
                </S.Tablet>
                <SideText top='150vh' left='2rem' rightTablet='1.5rem' rightMobile='1rem' data-scroll data-scroll-speed='1'>
                    Get rid of the need to enter into an employment relationship, while maintaining a <S.Span> high level of service</S.Span> 
                </SideText>
            </S.Feature>


            <S.Feature id='about-3'>
                <S.FeatureTitle >
                  Client Satisfaction:
                </S.FeatureTitle>
                
                <S.FeatureText>
                Client satisfaction is at the core of everything we do. We take pride in delivering high-quality, <S.Span>reliable, and 
                scalable solutions</S.Span> that exceed our clients expectations.
                </S.FeatureText>
                
                <S.Tablet id='tablet-3'>
                    <S.tImage >               
                    <img src={dataText} />
                    </S.tImage>
                   
                    
                </S.Tablet>

                <SideText top='150vh' right='2rem' rightTablet='1.5rem' rightMobile='1rem' data-scroll data-scroll-speed='1' >
                    
                Stay ahead of the curve with our <S.Span> cutting-edge data</S.Span> analytics and services
                </SideText>
            </S.Feature>





            <S.Feature right id='about-4'>
                <S.FeatureTitle>
                Innovation and Adaptability:
                </S.FeatureTitle>
                
                <S.FeatureText>
                    We understand that technology is constantly evolving, and businesses need to 
                    <S.Span> stay agile to remain competitive. </S.Span>
                    By embracing change and adapting quickly, we help our clients 
                    navigate the digital landscape and capitalize on new opportunities.
                </S.FeatureText>

                <S.Tablet id='tablet-4'>
                    <S.ButtonOne />
                    <S.ButtonTwo />
                    <S.tImage >               
                        <img src={FinalServicess} />
                    </S.tImage>
                    
                    
                </S.Tablet>
                
                <SideText top='150vh' left='2rem' rightTablet='1.5rem' rightMobile='1rem' data-scroll data-scroll-speed='1'>
                That's why we foster a culture of innovation, encouraging our team to explore  <S.Span>  new technologies.</S.Span> 
                </SideText>
            </S.Feature>
            
        </S.Features>



    )
}