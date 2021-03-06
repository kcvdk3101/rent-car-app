import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import FooterItemHeading from './footerItemHeading'
import FooterItemLinks from './footerItemLinks'

const FooterItemContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-center
        items-start
        mr-5
    `}
`

function FooterItem(props: any) {
    const {title, list} = props
    return (
        <FooterItemContainer>
            <FooterItemHeading title={title} />
            <FooterItemLinks list={list} />
        </FooterItemContainer>
    )
}

export default FooterItem
