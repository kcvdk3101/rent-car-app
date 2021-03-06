import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../../responsive'

const FooterContactContainer = styled.div`
    ${tw`
        flex
    `}

    @media (min-width: ${SCREENS.sm}) {
        ${tw`
            flex-col
        `}
    }

    @media (max-width: ${SCREENS.md}) {
        ${tw`
            flex-col
        `}
    }
    @media (min-width: ${SCREENS.lg}) {
        ${tw`
            flex-col
        `}
    }
`

const VerticalContainer = styled.div`
    ${tw`
        flex
        flex-col
    `}
`

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
        m-5
    `}

    @media (min-width: ${SCREENS.md}) {
        ${tw`
            m-0
            mb-5       
        `}
    }

    @media (min-width: ${SCREENS.lg}) {
        ${tw`
            m-0
            mb-5       
        `}
    }
`

const RedIcon = styled.span`
    ${tw`
        flex
        items-center
        justify-center
        w-10
        h-10
        bg-red-500
        rounded-full
        mr-2
        text-base
        text-white
    `}

    @media (min-width: ${SCREENS.md}) {
        ${tw`
            w-8
            h-8
        `}
    }
`

const SmallText = styled.p`
    ${tw`
        text-sm
        text-white
    `}

    @media (min-width: ${SCREENS.md}) {
        ${tw`
            text-xs
        `}
    }
`

function FooterContact(props: any) {
    const {list} = props
    return (
        <FooterContactContainer>
            {list.map((l: any, index: string) => (
                <HorizontalContainer key={index}>
                    <RedIcon>
                        <FontAwesomeIcon icon={l.icon} />
                    </RedIcon>
                    <VerticalContainer>
                        {l.text.map((t: any, indexText: string) => (
                            <SmallText key={indexText}>{t}</SmallText>
                        ))}
                    </VerticalContainer>
                </HorizontalContainer>
            ))}
        </FooterContactContainer>
    )
}

export default FooterContact
