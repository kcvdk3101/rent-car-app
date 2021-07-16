import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import mclaren from '../../assets/images/mclaren-orange-big.png';
import blob from '../../assets/images/blob.svg';
import { SCREENS } from '../../../responsive';
import Button from '../../components/button';
import convertScreenToWidth from '../../utils/convertScreenToWidth';

const TopSectionContainer = styled.div`
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        px-3
        lg:px-12
    `}
`
const LeftContainer = styled.div` 
    ${tw`
        flex
        flex-1
        flex-col
    `}
`
const RightContainer = styled.div`
    ${tw`
        relative
        flex
        flex-1
        flex-col
    `}
`
const Slogan = styled.h1`
    ${tw`
        leading-snug
        md:leading-8
        lg:leading-10
        xl:leading-relaxed
        text-base
        md:text-2xl
        lg:text-4xl
        xl:text-6xl
        text-black
        font-bold
        md:font-extrabold
        lg:font-black
    `}
`
const Description = styled.p`
    ${tw`
        mt-2
        text-align[justify]
        text-xs
        lg:text-sm
        xl:text-lg
        text-gray-600
    `}
`
const BlobContainer = styled.div`
    z-index: -1;
    position: absolute;
    top:-4em;
    left:-1.5em;
    width: 20em;
    transform: rotate(-30deg);

    img {
        width: 100%;
        height: auto;
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
    right: -6.5em;
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
        mt-2
    `}
`

function TopSection() {
    const isSmallThanScreenMedium = window.innerWidth <= convertScreenToWidth(SCREENS.md);
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent The Best Quality Car With Us</Slogan>
                <Description>
                    Always choose the best car from our global and local stores or order it remotely at 
                    the best price for you and get the best quality cars for as long as you like.
                </Description>
                <ButtonsContainer>
                    <Button
                        text={isSmallThanScreenMedium ? 'Booking' : 'Book Your Ride'}
                    />
                    <Button theme='filled' 
                        text={isSmallThanScreenMedium ? 'Sell Car' : 'Sell Your Car'}
                    />
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
