import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../../responsive'

import jeep from "../../assets/images/jeep.png"

const AboutUsContainer = styled.div`
    ${tw`   
        flex
        flex-col
        xl:flex-row
        items-center
        2xl:justify-center
        w-full
        mb-72
        px-10
        bg-white
    `}
`
const CarContainer = styled.div`
    ${tw`
        flex-1
        items-center
        justify-center
        w-auto
    `}

    img { 
        width: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        width:90%;
        height: 28em;
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 80%;
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
        md:text-xl
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
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi impedit consectetur 
                     cenreihle accusantium nisi fugiat aspernatur nesciunt tenetur esse sit! Veniam, perferendis quia. 
                     Eius ihskdk heoialveeoo voluptate veritatis corporis laudantium  opoeiru iied wquidem iusto.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi impedit consectetur 
                     cenreihle accusantium nisi fugiat aspernatur nesciunt tenetur esse sit! Veniam, perferendis quia. 
                     Eius ihskdk heoialveeoo voluptate veritatis corporis laudantium  opoeiru iied wquidem iusto.   
                </InfoText>
            </InfoContainer>
        </AboutUsContainer>
    )
}

export default AboutUs
