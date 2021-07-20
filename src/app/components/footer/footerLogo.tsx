import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import darkLogo from '../../assets/images/car-logo-dark.png'

const DarkLogoContainer = styled.div`
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
        md:text-3xl
        font-bold
        text-white
    `}
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

function FooterLogo() {
    return (
        <DarkLogoContainer>
            <Image>
                <img src={darkLogo} alt='dark-logo'/>
            </Image>
            <LogoText>Rental.</LogoText>
        </DarkLogoContainer>
    )
}

export default FooterLogo
