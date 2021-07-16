import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../../responsive'

import jeep from "../../assets/images/jeep.png"

const AboutUsContainer = styled.div`
    ${tw`   
        flex
        flex-col
        md:flex-row
        items-center
        2xl:justify-center
        w-full
        py-4
        px-10
        md:px-10
        bg-white
    `}
`

const CarContainer = styled.div`
    ${tw`
        flex-1
        w-auto
        height[15em]
    `}

    @media (min-width: ${SCREENS.md}) {
        width:100%;
        height: 28em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }

    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`

const InfoContainer = styled.div`
    ${tw`
        flex
        flex-1
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`

const Title = styled.h1`
    ${tw`
        text-2xl
        md:text-5xl
        text-black
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`

const InfoText = styled.p`
    ${tw`
        w-full
        m-auto
        mt-4
        text-justify
        text-sm
        md:text-base
        text-gray-500
        font-normal
    `}
`

function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={jeep} alt="Jeep"/>
            </CarContainer>
            <InfoContainer>
                <Title>Fell The Best Experience With Our Rental Deals</Title>
                <InfoText>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde architecto vel perferendis 
                     enim sapiente distinctio blanditiis dicta eos iste! Reprehenderit aliquam eaque repudiandae 
                     exercitationem rerum dolores, facere sunt iure tempore! Rerum placeat corrupti possimus 
                     obcaecati, vero iste tempora ab incidunt nisi, error perferendis amet magnam temporibus non. 
                     Modi, adipisci, iusto quaerat reiciendis quas error, in ducimus repellendus totam molestias nam.
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}

export default AboutUs
