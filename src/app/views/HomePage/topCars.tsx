import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Car from '../../components/car'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../../responsive';
import carService from '../../services/carService';
import { Dispatch } from '@reduxjs/toolkit';
import { GetCars_cars } from '../../services/carService/__generated__/GetCars';
import { setTopCars } from './slice';
import { useDispatch } from 'react-redux';

const testCars = [
    {
        name: "Audi S1 Car",
        mileage: "10k",
        thumbnailUrl:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
    },
    {
        name: "Audi S2 Car",
        mileage: "12k",
        thumbnailUrl:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 80,
        monthlyPrice: 1800,
        gearType: "Auto",
        gas: "Petrol",
    },
    {
        name: "Audi S3 Car",
        mileage: "14k",
        thumbnailUrl:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 100,
        monthlyPrice: 2000,
        gearType: "Auto",
        gas: "Petrol",
    },
    {
        name: "Audi S4 Car",
        mileage: "16k",
        thumbnailUrl:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 120,
        monthlyPrice: 2200,
        gearType: "Auto",
        gas: "Petrol",
    },
    {
        name: "Audi S5 Car",
        mileage: "18k",
        thumbnailUrl:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 140,
        monthlyPrice: 2400,
        gearType: "Auto",
        gas: "Petrol",
    },
    {
        name: "Audi S6 Car",
        mileage: "20k",
        thumbnailUrl:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 160,
        monthlyPrice: 2600,
        gearType: "Auto",
        gas: "Petrol",
    },
]

const TopCarsContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        w-full
        max-w-screen-lg
        mb-28
        md:mb-36
    `}
`
const Title = styled.h1`
    ${tw`
        text-3xl
        md:text-4xl
        lg:text-5xl
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

const actionDispatch = (dispatch: Dispatch) => ({
    setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars))
})

function TopCars() {
    const [currentIndex, setCurrentIndex] = useState('')
    const isMobile = useMediaQuery({maxWidth: SCREENS.sm})
    const { setTopCars } = actionDispatch(useDispatch())

    useEffect(() => {
        const fetchTopCars = async () => {
            const cars = await carService.getCars().catch((err) => {
                console.log(`Error`, err)
            })
            if (cars) setTopCars(cars)
        }
        fetchTopCars();
    }, [setTopCars])

    return (
        <TopCarsContainer>
            <Title>Explore Our Top Deals</Title>
            <CarsContainer>
                <Carousel 
                    value={currentIndex} 
                    onChange={setCurrentIndex} 
                    slides={testCars.map((car) => (<Car {...car} />))}
                    plugins={[
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            }
                        }
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1,
                                    }
                                }
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2,
                                    }
                                }
                            ]
                        }
                    }}
                />
                <Dots value={currentIndex} onChange={setCurrentIndex} number={isMobile ? testCars.length: testCars.length / 3} />
            </CarsContainer>
        </TopCarsContainer>
    )
}

export default TopCars
