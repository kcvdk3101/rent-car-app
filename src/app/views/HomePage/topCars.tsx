import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ICar } from '../../../typings/car'
import Car from '../../components/car'

const TopCarsContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        w-full
        max-w-screen-lg
        px-4
        md:px-0
        mb-10
    `}
`
const Title = styled.h2`
    ${tw`
        text-2xl
        md:text-3xl
        lg:text-4xl
        font-extrabold
        text-black
    `}
`
const CarsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        justify-center
        w-full
        mt-7
        md:mt-10
    `}
`

function TopCars() {
    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
    };

    const testCar2: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
    };

    const testCar3: ICar =  {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
    };

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Great Deals</Title>
            <CarsContainer>
                <Car { ...testCar }/>
                <Car { ...testCar2 }/>
                <Car { ...testCar3 }/>
            </CarsContainer>
        </TopCarsContainer>
    )
}

export default TopCars
