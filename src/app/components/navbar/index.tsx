import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../logo'
import NavItems from './navItems'

const NavbarContainer = styled.div`
    min-height: 68px;
    ${tw`
        flex
        flex-row
        w-full
        max-w-screen-2xl
        items-center
        justify-between
        lg:pl-12
        lg:pr-12
    `}
`

const LogoContainer = styled.div`
    ${tw`
        ml-3
        md:ml-0
    `}
`;

function Navbar() {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <NavItems/>
        </NavbarContainer>
    )
}

export default Navbar
