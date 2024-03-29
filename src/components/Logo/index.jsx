import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import airplane from '../../img/icons/airplane.svg';
import airplaneRed from '../../img/icons/airplane-red.svg';

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    margin-left: 17px;
  }
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  top: 0px;
  left: 3px;
  display: inline-block;
`;

const Title = styled.div`
  padding-left: 45px;
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 14px;
  line-height: 14px;
  color: ${props => (props.theme === 'white' ? '#ffffff' : '#272525')};
  letter-spacing: normal;
`;

export default ({ theme }) => (
  <Logo to="/">
    <Img src={theme === 'white' ? airplane : airplaneRed} />
    <Title theme={theme}>Турагенство Дмитрия Винокурова</Title>
  </Logo>
);
