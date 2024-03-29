import React from 'react';
import styled from 'styled-components';

const Option = styled.div`
  width: auto;
  padding: 16px 24px;
  font-size: 16px;
  line-height: 22px;
  color: #474d57;
  font-family: 'opensans';
  font-weight: 500;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgba(44, 123, 167, 0.2);
  border: 1px solid #e9e9e9;
  background-color: #ffffff;
  cursor: pointer;
  margin-bottom: 16px;
  transition: .2s;
  &:hover {
    background-color: #ed1b24;
    color: #ffffff;
  }
  &:hover div {
    background-image: url(${props => (props.hoverContent)});
  }
`;

const Img = styled.div`
  display: block;
  margin: auto;
  height: 24px;
  width: auto;
  background-image: url(${props => (props.content)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default ({
  type,
  question,
  content,
  hoverContent,
  value,
  numberOfQuestion,
  handleOptionClick,
  handleGoNextQuestion,
  handleOptionHover,
  imgSrc,
}) => {
  const handleClick = () => {
    handleOptionClick(question, numberOfQuestion, value, content);
    handleGoNextQuestion();
  };

  const handleMouseEnter = () => {
    handleOptionHover(imgSrc);
  };

  return (
    <Option
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      hoverContent={hoverContent}
    >
      {
        type === 'text' ? (content) : (<Img content={content} />)
      }
    </Option>
  );
};
