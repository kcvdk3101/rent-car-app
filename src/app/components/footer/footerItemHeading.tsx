import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../../responsive'

const HeadingContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-start
        mb-5
    `}

    @media (min-width: ${SCREENS.xs}){
        display: none;
    }

    @media (min-width: ${SCREENS.md}){
        display: block;
    }
`

const HeadingTitle = styled.h4`
    letter-spacing: 2px;
    ${tw`
        mb-1
        text-lg
        lg:text-2xl
        text-white
        font-black
    `}

    @media (min-width: ${SCREENS.md}) {
        font-size: 22px;
    }
`

const HeadingLongUnderLine = styled.div`
    ${tw`
        w-12
        h-2
        rounded-md
        bg-red-600
        mb-1
    `}
`

const HeadingShortUnderLine = styled.div`
    ${tw`
        w-6
        h-2
        rounded-md
        bg-red-600
    `}
`


function FooterItemHeading(props: any) {
    const {title} = props
    return (
        <HeadingContainer>
            <HeadingTitle>{title}</HeadingTitle>
            <HeadingLongUnderLine/>
            <HeadingShortUnderLine/>
        </HeadingContainer>
    )
}

export default FooterItemHeading
