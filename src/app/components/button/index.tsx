import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../../responsive'

interface IButtonProps {
    theme?: 'filled' | 'outlined',
    text: String;
}

const BaseButton = styled.div`
    ${tw`
        border-2
        border-solid
        border-transparent
        outline-none
        rounded-md
        focus:outline-none

        p-2
        mr-2

        font-semibold
        text-xs
        md:text-base
        text-white

        transition-all
        duration-200
        ease-in-out
    `}

    @media (min-width: ${SCREENS.sm}) {
        ${tw`
            p-4
        `}
    }
`

const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-red-500
        hover:border-red-500
        hover:text-red-500
        hover:bg-transparent
        text-center
    `}
`

const FilledButton = styled(BaseButton)`
    ${tw`
        border-red-500
        hover:border-transparent
        bg-transparent
        hover:bg-red-500
        text-red-500
        text-center
        hover:text-white
    `}
`

function Button(props: IButtonProps) {
    const {theme, text} = props;
    if (theme === 'filled') {
        return <FilledButton>{ text }</FilledButton>
    }
    return <OutlinedButton>{ text }</OutlinedButton>
}

export default Button
