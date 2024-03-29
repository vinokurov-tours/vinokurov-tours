import React from 'react';
import styled from 'styled-components';
import WhatYouGetItem from '../WhatYouGetItem';
import WhatYouGetData from './data';
import SectionWrap from '../SectionWrap';

const Wrapper = styled(SectionWrap)`
  // max-width: 1170px;
  // margin: inherit;
  // padding-left: 0;
  // padding-right: 0;
    
  @media screen and (max-width: 1366px) {
    padding-right: 0;
  }
`;

const WhatYouGet = styled.div`
  padding-top: 58px;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    display: block;
    left: 0px;
    bottom: 0px;
    right: 0px;
    height: 20px;
    background-color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    padding-top: 13px;
  }
`;

const Title = styled.h2`
  font-family: 'GothamPro';
  font-size: 36px;
  line-height: 46px;
  color: #474d57;
  position: relative;
  margin-bottom: 32px;
  &:after {
    position: absolute;
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 33px;
  }
`;

const Wrap = styled.div`
  overflow-x: scroll;
`;

const ItemsInner = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  padding-top: 3px;
  padding-left: 3px;
  padding-right: 3px;
`;

export default ({ direction }) => {
  let ItemsTemplate = [];

  ItemsTemplate = WhatYouGetData.map(curItem => (
    <WhatYouGetItem
      key={curItem.title}
      icon={curItem.icon}
      title={curItem.title === 'Идеальный отдых' ? `${curItem.title} в ${direction}` : curItem.title}
      text={curItem.text}
    />
  ));

  return (
    <Wrapper>
      <WhatYouGet>
        <Title>Что вы получите</Title>
        <Wrap>
          <ItemsInner>
            {ItemsTemplate}
          </ItemsInner>
        </Wrap>
      </WhatYouGet>
    </Wrapper>
  );
};
