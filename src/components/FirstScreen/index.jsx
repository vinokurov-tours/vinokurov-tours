import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Button from '../Button';
import Directions from './Directions';
import SquarePicture from '../SquarePicture';
import mainImage from '../../img/main.jpg';
import mainImageMob from '../../img/main_m.jpg';

const Wrap = styled.div`
  max-width: 1366px;
  min-width: 360px;
  padding-left: 98px;
  padding-right: 98px;
  margin: auto;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const FirstScreen = styled.section`
  position: relative;
  height: 714px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  @media screen and (max-width: 992px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 576px) {
    height: auto;
    padding-bottom: 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 0 0 470px;
  padding-top: 17px;
  @media screen and (max-width: 768px) {
    display: block;
    width: auto;
    flex: 0 1 auto;
    padding-top: 13px;
  }
`;

const RightColumn = styled.div`
  flex: 0 1 670px;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const IndividualTours = styled.p`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: 0.6px;
  color: #b4b4b4;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    color: #fff;
  }
`;

const Title = styled.h3`
  font-family: 'GothamPro';
  font-weight: 500;
  font-size: 48px;
  line-height: 57px;
  color: #474d57;
  margin-bottom: 26px;
  @media screen and (max-width: 576px) {
    font-size: 32px;
    line-height: 44.16px;
  } 
  @media screen and (max-width: 768px) {
    color: #fff;
  }
`;

const Caption = styled.p`
  font-family: 'opensans';
  font-size: 14px;
  line-height: 21px;
  color: #474d57;
  margin-bottom: 38px;  
  @media screen and (max-width: 768px) {
    color: #fff;
  }
`;

const Offer = styled.div`
  padding-bottom: 25px;
  margin-top: 88px;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
    padding-top: 45px;
    padding-left: 17px;
    padding-right: 17px;
    background: url(${mainImageMob});
    background-size: cover;
  }
`;

export default ({ scrollToMyRef }) => (
  <Wrap>
    <FirstScreen>
      <LeftColumn>
        <Logo />
        <Offer>
          <IndividualTours>индивидуальные туры от экспертов</IndividualTours>
          <Title>
            Подбор туров в Таиланд за 2 часа
          </Title>
          <Caption>
            С учётом всех ваших потребностей. Через
            <br />
            проверенных Туроператоров.
          </Caption>
          <Button
            width={158}
            text="подобрать"
            handleClick={scrollToMyRef}
          />
        </Offer>
        <Directions />
      </LeftColumn>
      <RightColumn>
        <SquarePicture width="100%" height="700px" img={mainImage} />
      </RightColumn>
    </FirstScreen>
  </Wrap>
);
