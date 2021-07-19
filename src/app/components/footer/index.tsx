import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../logo'

const FooterContainer = styled.div`
    min-height: 25em;
    background-color: rgb(29,33,36);
    ${tw`
        flex
        items-center
        justify-center
        min-w-full
        py-4
        md:py-10
        pb-1
    `}
`

const InnerContainer = styled.div`
    ${tw`
        flex
        w-5/6
        h-full
    `}
`

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-8
    `}
`

const AboutText = styled.p`
    ${tw`
        max-w-xs
        mt-2
        leading-6
        text-white
        text-sm
        text-align[justify]
        font-normal
    `}
`

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-8
    `}
`

const LinksList = styled.ul`
    ${tw`
        flex
        flex-col
        outline-none
        list-none
    `}
`

const ListItem = styled.h1`
    ${tw`
        mb-5
    `}

    & > a {
        ${tw`            
            text-sm
            text-white
            transition-all
        `}
    }
`

const HeaderTitle = styled.h3`
    ${tw`
        mb-3
        text-xl
        text-white
        font-black
    `}
`

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
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
`

const SmallText = styled.p`
    ${tw`
        text-sm
        text-white
    `}
`

function Footer() {
    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="dark" />
                    <AboutText>
                    Lorem ipsum dolor sit amet consectetur adipisicing qpelit. Placeat voluptatibus quia minima est 
                    doloribus nostrum dolores quas quod, voluptatem sitasaff magnam natus. Tempore, aliquid nobisabt 
                    aliquam neque adipisci blanditiis porro! lorem
                    </AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem>
                            <a href="#!">About Us</a>
                        </ListItem>
                        <ListItem>
                            <a href="#!">Cars</a>
                        </ListItem>
                        <ListItem>
                            <a href="#!">Services</a>
                        </ListItem>
                        <ListItem>
                            <a href="#!">Contact</a>
                        </ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem>
                            <a href="#!">FAQ</a>
                        </ListItem>
                        <ListItem>
                            <a href="#!">Blogs</a>
                        </ListItem>
                        <ListItem>
                            <a href="#!">Support</a>
                        </ListItem>
                        <ListItem>
                            <a href="#!">Privacy Policy</a>
                        </ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+84 0123 456 789</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>kcvdk2000@gmail.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
        </FooterContainer>
    )
}

export default Footer
