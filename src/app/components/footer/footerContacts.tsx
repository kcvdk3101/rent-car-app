import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import FooterContact from './footerContact'
import FooterItemHeading from './footerItemHeading'

const FooterContactContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-start
    `}
`

function FooterContacts(props: any) {
    const {title, list} = props
    return (
        <FooterContactContainer>
            <FooterItemHeading title={title}/>
            <FooterContact list={list}/>
        </FooterContactContainer>
    )
}

export default FooterContacts
