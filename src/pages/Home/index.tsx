import React, { useMemo } from 'react';
import Card from '../../components/Card';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { CardType } from '../../types';
import { Mobile, Wrapper, Content, RectangleDiv, HeadText, StyledNavLink, HeadDiv, BodyDiv, CardsDiv, BodyText } from './styles';

const Home = () => {
  const cards: CardType[] = useMemo(
    () => [
      { imgSrc: 'Card1.png', title: 'Clean Design', text: 'Increase sales by showing true dynamics of your website.' },
      { imgSrc: 'Card2.png', title: 'Secure Data', text: 'Build your online store’s trust using Social Proof & Urgency.' },
      {
        imgSrc: 'Card3.png',
        title: 'Retina Ready',
        text: 'Realize importance of social proof in customer’s purchase decision.',
      },
    ],
    []
  );

  return (
    <Wrapper>
      <Content>
        <HeadDiv>
          <NavBar isHome />
          <RectangleDiv>
            <HeadText>
              <span>
                <strong>Brainstorming</strong> for desired perfect Usability
              </span>
              <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
              <StyledNavLink to='/users-statistics-table'>
                <span>View Stats</span>
              </StyledNavLink>
            </HeadText>
            <Mobile>
              <img src='mobile.png' alt='mobile' />
            </Mobile>
          </RectangleDiv>
        </HeadDiv>
        <BodyDiv>
          <BodyText>
            <span>
              Why <strong>small business owners love</strong> AppCo?
            </span>
            <p>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
          </BodyText>
          <CardsDiv>
            {cards.map((card) => (
              <Card key={card.title} imgSrc={card.imgSrc} title={card.title} text={card.text} />
            ))}
          </CardsDiv>
        </BodyDiv>
      </Content>
      <Footer isHome />
    </Wrapper>
  );
};

export default Home;
