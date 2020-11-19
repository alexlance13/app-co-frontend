import React from 'react';
import { Wrapper, FooterDiv, FooterText, SubscribeForm, RightsDiv } from './styles';

const Footer: React.FC<PropsType> = ({ isHome }) => {
  return (
    <Wrapper isHome={isHome}>
      <FooterDiv>
        {isHome && (
          <SubscribeForm>
            <input type='email' placeholder='Enter your email' />
            <button>Subscribe</button>
          </SubscribeForm>
        )}
        <FooterText>
          <span>AppCo</span>
          <RightsDiv>
            <p>All rights reserved by ThemeTags</p>
            <p>Copyrights © 2019.</p>
          </RightsDiv>
        </FooterText>
      </FooterDiv>
    </Wrapper>
  );
};

export default Footer;

interface PropsType {
  isHome?: boolean;
}
