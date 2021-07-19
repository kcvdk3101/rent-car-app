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
        mt-8
        md:mt-20
        lg:mt-28
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
        lg:leading-relaxed
        text-xl
        font-semibold
        md:text-3xl
        lg:text-4xl
        xl:text-6xl
        text-black
    `}

    @media (min-width: ${SCREENS.xl}) {
        line-height: 80px;
    }
`
const Description = styled.p`
    ${tw`
        my-2
        text-align[justify]
        text-xs
        md:text-base
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
        top: -12em;
        left: -10em;
        width: 40em;
        max-height: 10em;
        transform: rotate(-35deg);
    }

    @media (min-width: ${SCREENS.lg}) {
        top: -17em;
        left: -8em;
        width: 52em;
        max-height: 25em;
        transform: rotate(-30deg)
    }

    @media (min-width: ${SCREENS.xl}) {
        top: -18em;
        left: -10em;
        width: 70em;
        max-height: 30em;
        transform: rotate(-40deg)
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
        top: -4em;
        left:0;
        height: 20em;
    }

    @media (min-width: ${SCREENS.lg}) {
        top: -5em;
        right: -8em;
        height: 21em;
    }

    @media (min-width: ${SCREENS.xl}) {
        top: -50px;
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
    const isSmallThanScreenMedium = window.innerWidth < convertScreenToWidth(SCREENS.md);
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>{isSmallThanScreenMedium ? 'Let Rent The Best Quality Car' : 'Rent The Best Quality Car With Us'}</Slogan>
                <Description>
                    Always choose the best car from our global and local stores or order it remotely at 
                    the best price for you and get the best quality cars for as long as you like.
                </Description>
                <ButtonsContainer>
                    <Button
                        text={isSmallThanScreenMedium ? 'Book Ride' : 'Book Your Ride'}
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
