import { faBriefcase, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../../responsive'
import Logo from '../logo'
import FooterContacts from './footerContacts'
import FooterItem from './footerItem'

const ourLinks = [
    {
        name: "Home",
        path: "/home",
    },
    {
        name: "About Us",
        path: "/about",
    },
    {
        name: "Services",
        path: "/",
    },
    {
        name: "Models",
        path: "/",
    },
    {
        name: "Blog",
        path: "/",
    },
]

const otherLinks = [
    {
        name: "Contact Us",
        path: "/",
    },
    {
        name: "FAQ",
        path: "/",
    },
    {
        name: "Support",
        path: "/",
    },
    {
        name: "Privacy Policy",
        path: "/",
    },
    {
        name: "Team & Condition",
        path: "/",
    },
]

const contacts = [
    {
        icon: faMapMarkerAlt,
        text: ["828 Su Van Hanh", "Ward 13 District 10 HCMC"]
    },
    {
        icon: faPhoneAlt,
        text: ["+84 123 456 789", "+1 221 006 783"]
    },
    {
        icon: faEnvelope,
        text: ["kcvdk2000@gmail.com", "rental@gmail.com"]
    },
    {
        icon: faBriefcase,
        text: ["Mon-Sat: 09:00 - 18:00", "Sunday: Closed"]
    },
]

const FooterContainer = styled.div`
    background-color: #1d2124;
    ${tw`
        flex
        items-center
        justify-center
        w-full
        md:py-10
        p-10
    `}

    @media (max-width: ${SCREENS.md}) {
        ${tw`
            flex-col
        `}
    }
`

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mb-5
    `}
`

const AboutText = styled.p`
    ${tw`
        mt-2
        leading-6
        text-white
        text-sm
        text-align[justify]
        font-normal
    `}

    @media (max-width: ${SCREENS.sm}) {
       ${tw`
            display[none]
       `}
    }
`

const FooterItemsList = styled.div`
    ${tw`
        flex
        flex-wrap
        justify-around
        items-center
        w-full
    `}
`

function Footer() {
    return (
        <FooterContainer>
            <AboutContainer>
                <Logo color="white" bgColor="dark" />
                <AboutText>
                    Lorem ipsum dolor sit amet consectetur adipisicing qpelit. Placeat voluptatibus quia minima est 
                    doloribus nostrum dolores quas quod, voluptatem sitasaff magnam natus. Tempore, aliquid nobisabt 
                    aliquam neque adipisci blanditiis porro! lorem
                </AboutText>
            </AboutContainer>
            <FooterItemsList>
                <FooterItem title="Our Links" list={ourLinks}/>
                <FooterItem title="Other Links" list={otherLinks}/>
                <FooterContacts title="Contact" list={contacts}/>
            </FooterItemsList>
        </FooterContainer>
    )
}

export default Footer
