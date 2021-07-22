import { faEllipsisH, faFillDrip, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ICar } from '../../../typings/car'
import Button from '../button'

interface ICarProps extends ICar {
}

const CarContainer = styled.div`
    width: 16.5em;
    min-height: 22.2em;
    max-height: 22.22.em;
    ${tw`
        flex
        flex-col
        items-center
        bg-white
        rounded-md
        shadow-md
        m-1
        sm:m-3
        md:m-6
        p-3
        pb-4
    `}
`

const CarThumbnail = styled.div`    
    ${tw`
        w-full
        h-auto
    `}

    img { 
        width: 100%;
        height:100%;
    }
`

const CarName = styled.div`
    ${tw`
        my-1
        text-base
        md:text-xl
        font-bold
        text-black
    `}
`

const CarPricesContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-start
        mt-3
    `}
`

const CarDailyPrice = styled.h5`
    ${tw`
        mr-3
        font-bold
        text-sm
        text-red-500
    `}
`

const CarMonthlyPrice = styled.h5`
    ${tw`
        font-bold
        text-sm
        text-gray-500
    `}
`

const SmallIcon = styled.span`
    ${tw`
        mr-1
        text-sm
        text-gray-400
    `}
`

const SmallText = styled.p`
    color: inherit;
    ${tw`
        inline-flex
        text-xs
        font-thin
    `}
`

const CarDetailsContainer = styled.div`
    ${tw`
        flex
        justify-between
        w-full
    `}
`

const CarDetail = styled.span`
    ${tw`
        flex
        items-center
    `}
`

const CarInfo = styled.h6`
    ${tw`
        text-xs
        text-gray-400
    `}
`

const SpaceSeparator = styled.div`
    min-width: 100%;
    min-height: 1px;
    ${tw`
        flex
        bg-gray-300
        my-2
    `}
`

const CarRentButton = styled(Button)`
    ${tw`
        min-w-full
        mt-5
    `}
`

function Car(props: ICarProps) {
    const { name, thumbnailUrl, dailyPrice, monthlyPrice, mileage, gearType, gas } = props
    return (
        <CarContainer>
            <CarThumbnail>
                <img src={thumbnailUrl} alt="" />
            </CarThumbnail>
            <CarName>{ name }</CarName>
            <CarPricesContainer>
                <CarDailyPrice>{ dailyPrice }<SmallText>/day</SmallText></CarDailyPrice>
                <CarMonthlyPrice>{ monthlyPrice }<SmallText>/month</SmallText></CarMonthlyPrice>
            </CarPricesContainer>
            <SpaceSeparator/>
            <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt} />
                    </SmallIcon>
                    <CarInfo>{ mileage }</CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </SmallIcon>
                    <CarInfo>{ gearType }</CarInfo>
                </CarDetail>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faFillDrip} />
                    </SmallIcon>
                    <CarInfo>{ gas }</CarInfo>
                </CarDetail>
            </CarDetailsContainer>
            <CarRentButton text="Rent Now" />
        </CarContainer>
    )
}

export default Car
