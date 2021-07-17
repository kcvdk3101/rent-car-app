import { faAngleDown, faAngleUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Button from '../button'
import Calendar from 'react-calendar'
import { SCREENS } from '../../../responsive'
import convertScreenToWidth from '../../utils/convertScreenToWidth'

const CardContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        w-11/12
        md:w-auto
        rounded-md
        bg-white
        shadow
        my-10
        py-4
        px-2
        md:py-2
        md:px-6
        lg:py-4
        lg:px-8 
        md:my-16
    `}

    @media (min-width: ${SCREENS.lg}) {
        margin-top: 100px;
        margin-bottom: 100px;
    }

    @media (min-width: ${SCREENS.xl}) {
        margin-top: 120px;
        margin-bottom: 120px;
    }
`
const ItemContainer = styled.div`
    ${tw`
        cursor-pointer
        relative
        flex
    `}
`
const Icon = styled.span`
    ${tw`
        flex
        justify-center
        items-center
        text-xs
        md:text-base
        mr-1
        md:mr-3
        text-red-500
    `}

    @media (max-width: ${SCREENS.sm}) {
        display: none;
    }
`
const Name = styled.span`
    ${tw`
        flex
        justify-center
        items-center
        mx-2
        text-xs
        text-align[center]
        md:text-sm
        md:text-align[start]
        text-gray-500
        select-none
    `}
`
const SmallIcon = styled.span`
    ${tw`
        flex
        justify-center
        items-center
        text-xs
        text-gray-300
        md:text-base
        fill-current
        transition
        duration-500
        ease-in-out
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
    const isSmallThanScreenMedium = window.innerWidth < convertScreenToWidth(SCREENS.md);


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
            <LineSeparator/>
            <Button text={isSmallThanScreenMedium ? 'Booking' : 'Book Your Ride'}/>
        </CardContainer>
    )
}

export default BookCard
