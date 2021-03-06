import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../../responsive';
import { styles } from './menuStyles';

const navItems = [
    {
        item: 'Home',
        path: '/'
    },
    {
        item: 'Cars',
        path: '/cars'
    },
    {
        item: 'Services',
        path: '/services'
    },
    {
        item: 'Contact',
        path: '/contact'
    },
]

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`

const NavItem = styled.li`
    ${tw`
        cursor-pointer
        mr-1
        md:mr-5
        text-xl
        md:text-base
        font-medium
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
`


function NavItems() {
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })
    if (isMobile) {
        return (
            <Menu right styles={styles}>
                 <ListContainer>
                    {navItems.map((value, index) => (
                        <NavItem key={index}>
                            <a href={value.path}>{value.item}</a>
                        </NavItem>
                    ))}
                </ListContainer>
            </Menu>
        )
    }

    return (
        <ListContainer>
            {navItems.map((value, index) => (
                <NavItem key={index}>
                    <a href={value.path}>{value.item}</a>
                </NavItem>
            ))}
        </ListContainer>
    )
}

export default NavItems
