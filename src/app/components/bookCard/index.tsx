import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from '../button'
import { Marginer } from '../marginer/index'

const CardContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        shadow
        py-1
        px-2
        md:py-2
        md:px-6
    `}
`

const ItemContainer = styled.div`
    ${tw`flex`}
`

const Icon = styled.span`
    ${tw`
        text-xs
        md:text-base
        mr-1
        md:mr-3
        text-red-500
        fill-current
    `}
`

const Name = styled.span`
    ${tw`
        text-xs
        md:text-sm
        text-gray-500
    `}
`

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mx-2
        md:mx-5
    `}
`

function BookCard() {
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Pick Up Date</Name>
            </ItemContainer>
            <LineSeparator/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>Return Date</Name>
            </ItemContainer>
            <Marginer margin="2em" direction="horizontal" />
            <Button text="Book Your Ride"/>
        </CardContainer>
    )
}

export default BookCard
