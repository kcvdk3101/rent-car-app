import { faCalendarAlt, faCarSide, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const steps = [
    {
        icon: faMapMarkedAlt,
        title: "Choose Location",
        description: "Find the nearest location and book your car"
    },
    {
        icon: faCalendarAlt,
        title: "Pick Up Date",
        description: "Pickup the best date to rent a car for you"
    },
    {
        icon: faCarSide,
        title: "Book Your Car",
        description: "Book your car with a touch"
    },
]

const Container = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        w-full
        py-3
        lg:py-6
    `}
`

const Title = styled.h2`
    ${tw`
        text-xl
        lg:text-4xl
        font-extrabold
        text-black
    `}
`

const StepsContainer = styled.div`
    ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `}
`

const StepContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        md:w-96
        m-3
        transition-colors
        hover:text-red-500
    `}
`

const Step = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        p-6
        rounded-lg
        shadow-md
    `}
`
const StepTitle = styled.h4`
    ${tw`
        mt-4
        text-lg
        font-semibold
        text-black
    `}
`

const StepDescription = styled.p`
    ${tw`
        w-10/12
        text-center
        text-xs
        md:text-sm
        text-gray-600
    `}
`

const StepIcon = styled.span`
    ${tw` 
        text-3xl
        text-red-500
    `}
`

function BookingSteps() {
    return (
        <Container>
            <Title>How It Works</Title>
            <StepsContainer>
                {steps.map((value, index) => (
                    <StepContainer key={index}>
                        <Step>
                            <StepIcon>
                                <FontAwesomeIcon icon={value.icon} />
                            </StepIcon>
                        </Step>
                        <StepTitle>{value.title}</StepTitle>
                        <StepDescription>{value.description}</StepDescription>
                    </StepContainer>
                ))}
            </StepsContainer>
        </Container>
    )
}

export default BookingSteps
