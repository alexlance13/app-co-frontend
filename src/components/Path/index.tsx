import React from 'react';
import { LinkType } from '../../types';
import { StyledNavLink, Wrapper, Arrow } from './styles';

const Path: React.FC<PropsType> = ({ links }) => {
  return (
    <Wrapper>
      {links.map((link: LinkType, i: number) => (
        <>
          <StyledNavLink key={i} to={link.url} current={links[i + 1] ? 0 : 1}>
            {link.title}
          </StyledNavLink>
          {links[i + 1] && <Arrow key={'arrow' + i} />}
        </>
      ))}
    </Wrapper>
  );
};

export default Path;

interface PropsType {
  links: LinkType[];
}
