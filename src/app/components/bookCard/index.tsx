import { faAngleDown, faAngleUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from '../button'
import { Marginer } from '../marginer/index'
import Calendar from 'react-calendar'
import { SCREENS } from '../../../responsive'

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
    ${tw`
        relative
        flex
        cursor-pointer
    `}
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

const SmallIcon = styled.span`
    ${tw`
        ml-2
        text-xs
        text-gray-300
        md:text-base
        fill-current
        transition
        duration-500
        ease-in-out
    `}
`

const Name = styled.span`
    ${tw`
        flex
        items-center
        text-xs
        md:text-sm
        text-gray-500
        select-none
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

const DateCalendar = styled(Calendar)`
    ${tw`
        absolute
        max-w-none
        user-select[none]
        top-14
        left-1.5
    `}
    /**
    * TODO: Responsive in Mobile Device
    */
    @media (min-width: ${SCREENS.sm}) {

    }

`

function BookCard() {
    const [startDate, setStartDate] = useState<Date>(new Date())
    const [openStartCalendar, setOpenStartCalendar] = useState(false)
    const [returnDate, setReturnDate] = useState<Date>(new Date())
    const [openReturnCalendar, setOpenReturnCalendar] = useState(false)


    const handleOpenStartCalendar = () => {
        setOpenStartCalendar(!openStartCalendar)
        if (openReturnCalendar) setOpenReturnCalendar(false)
    }

    const handleOpenReturnCalendar = () => {
        setOpenReturnCalendar(!openReturnCalendar)
        if (openStartCalendar) setOpenStartCalendar(false)
    }


    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={handleOpenStartCalendar}>Pick Up Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={openStartCalendar ? faAngleUp : faAngleDown} />
                </SmallIcon>
                {openStartCalendar && <DateCalendar value={startDate} onChange={setStartDate} minDate={new Date()}/> }
            </ItemContainer>
            <LineSeparator/>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={handleOpenReturnCalendar}>Return Date</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={openReturnCalendar ? faAngleUp : faAngleDown} />
                </SmallIcon>
                {openReturnCalendar && <DateCalendar value={returnDate} onChange={setReturnDate} minDate={new Date()}/>}
            </ItemContainer>
            <Marginer direction="horizontal" margin="16px" />
            <Button text="Book Your Ride"/>
        </CardContainer>
    )
}

export default BookCard
