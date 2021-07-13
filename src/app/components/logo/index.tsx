import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import logo from '../../assets/images/car-logo.png'

const LogoContainer = styled.div`
    ${tw`
        flex
        items-center
    `}
`;

const LogoText = styled.div`
    ${tw`
        text-transform[uppercase]
        m-1
        text-xl
        md:text-2xl
        font-bold
        text-black
    `}
`;

const Image = styled.div`
    ${tw`
        w-auto
        h-6
        md:h-9
    `};

    img { 
        width: auto;
        height: 100%;
    }
`;

function Logo() {
    return (
        <LogoContainer>
            <Image>
                <img src={logo} alt='logo'/>
            </Image>
            <LogoText>Satan.</LogoText>
        </LogoContainer>
    )
}

export default Logo