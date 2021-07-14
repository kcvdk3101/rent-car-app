import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import mclaren from '../../assets/images/mclaren-orange-big.png';
import blob from '../../assets/images/blob.svg';
import { SCREENS } from '../../../responsive';
import Button from '../../components/button';

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`
const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`
const RightContainer = styled.div`
    ${tw`
        relative
        w-1/2
        flex
        flex-col
        mt-20
    `}
`
const Slogan = styled.h1`
    ${tw`
        mb-4
        font-bold
        md:font-extrabold
        lg:font-black
        text-black
        text-2xl
        sm:text-3xl
        md:text-5xl
        xl:text-6xl
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`
const Description = styled.p`
    ${tw`
        overflow-hidden
        max-h-12
        sm:max-h-full
        text-gray-800
        text-xs
        lg:text-sm
        xl:text-lg
    `}
`
const BlobContainer = styled.div`
    z-index: -1;
    position: absolute;
    top: -9em;
    right: -5em;
    width: 20em;
    height: 10em;
    transform: rotate(-30deg);

    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        top: -16em;
        right: -9em;
        width: 40em;
        max-height: 10em;
        transform: rotate(-25deg)
    }

    @media (min-width: ${SCREENS.lg}) {
        top: -15em;
        right: -7em;
        width: 50em;
        max-height: 30em;
        transform: rotate(-30deg)
    }

    @media (min-width: ${SCREENS.xl}) {
        top: -25em;
        right: -15em;
        width: 70em;
        max-height: 30em;
        transform: rotate(-20deg)
    }

`
const StandaloneCar = styled.div`
    position: absolute;
    top: -5em;
    right: -6em;
    width: auto;
    height: 10em;

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        top: -6em;
        right: -6em;
        height: 16em;
    }

    @media (min-width: ${SCREENS.lg}) {
        top: -5em;
        right: -8em;
        height: 21em;
    }

    @media (min-width: ${SCREENS.xl}) {
        top: -9em;
        right: -13em;
        height: 30em;
    }
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `}
`

function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent The Best Quality Car With Us</Slogan>
                <Description>
                    Always choose the best car from our local stores or order it remotely at 
                    the best price for you and get the best quality cars for as long as you like
                </Description>
                <ButtonsContainer>
                    <Button text='Book Your Ride'/>
                    <Button theme='filled' text='Sell Your Car'/>
                </ButtonsContainer>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={blob} alt="blob" />
                </BlobContainer>
                <StandaloneCar>
                    <img src={mclaren} alt="mclaren" />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    )
}

export default TopSection
