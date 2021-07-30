import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterItemLinksList = styled.ul`
  ${tw`
        flex
        flex-col
        outline-none
        list-none
    `}
`;
const FooterItemListItem = styled.h1`
  ${tw`
        mb-2
    `}

  & > a {
    ${tw`            
            text-sm
            text-white
            transition-all
        `}
  }
`;

function FooterItemLinks(props: any) {
  const { list } = props;
  return (
    <FooterItemLinksList>
      {list.map((l: any, index: number) => (
        <FooterItemListItem key={index}>
          <a href={l.path}>{l.name}</a>
        </FooterItemListItem>
      ))}
    </FooterItemLinksList>
  );
}

export default FooterItemLinks;
