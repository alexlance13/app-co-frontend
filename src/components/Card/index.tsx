import React from 'react';
import { Wrapper } from './styles';

const Card: React.FC<PropsType> = ({ imgSrc, title, text }) => {
  return (
    <Wrapper>
      <img src={imgSrc} alt={title} />
      <span>{title}</span>
      <p>{text}</p>
    </Wrapper>
  );
};

export default Card;

interface PropsType {
  imgSrc: string;
  title: string;
  text: string;
}
