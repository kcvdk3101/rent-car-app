import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import logo from '../../assets/images/car-logo.png'
import darkLogo from '../../assets/images/car-logo-dark.png'

interface ILogoProps {
    color?: "white" | "dark",
    bgColor?: "white" | "dark"
}

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
        ml-3
    `}
`;

const LogoText = styled.div`
    ${tw`
        m-1
        text-2xl
        font-bold
        text-black
    `}
    ${({color}) => color === "white" ? tw`text-white` : tw`text-black`}
`;

const Image = styled.div`
    ${tw`
        w-auto
        h-14
        md:h-9
    `};

    img { 
        width: auto;
        height: 100%;
    }
`;

function Logo(props: ILogoProps) {
    const { color, bgColor } = props;
    return (
        <LogoContainer>
            <Image>
                <img src={bgColor === "dark" ? darkLogo: logo} alt='logo'/>
            </Image>
            <LogoText color={color || "dark"} >Rental.</LogoText>
        </LogoContainer>
    )
}

export default Logo
