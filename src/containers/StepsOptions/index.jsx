import React, { Component } from 'react';
import styled from 'styled-components';
import StepOption from '../../components/StepOption';
import Input from '../Input';
import TestQuestionsForm from '../StepsForm';
import stepsData from './stepsData';
import StepItem from '../../components/StepItem';
import backlink from '../../img/icons/back-link.svg';
import calender from '../../img/icons/calendar.svg';
import img1 from '../../img/1.jpg';

const Wrap = styled.div`
  display: inline-block;
  width: 370px;
`;

const GoBack = styled.div`
  display: inline-block;
  background-image: url(${backlink});
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: 0px 0px;
  height: 24px;
  padding-left: 32px;
  font-family: 'opensans';
  font-size: 16px;
  line-height: 24px;
  color: #474d57;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

class TestQuestionsOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfActiveStep: 0,
      data: stepsData,
    };
  }

  handleGoNextQuestion = () => {
    let { numberOfActiveStep } = this.state;
    numberOfActiveStep += 1;
    this.setState({ numberOfActiveStep });
  }

  handleGoBack = () => {
    let { numberOfActiveStep } = this.state;

    if (numberOfActiveStep !== 0) {
      this.setState({ numberOfActiveStep: numberOfActiveStep -= 1 });
    } else {
      return false;
    }
    return true;
  }

  render() {
    const {
      container: {
        addAnswer,
        addFormData,
        state: {
          testQuestionsCollected,
        },
      },
      imageContainer: {
        setImage,
      },
    } = this.props;

    const { numberOfActiveStep, data } = this.state;
    const stepsDataLength = data.length;
    const lastQuestion = numberOfActiveStep === stepsDataLength - 1;
    let questionsItemTemplate = [];
    let visibleGoBack = numberOfActiveStep !== 0;

    /* Если все ответы получены, скрываем кнопку возврата назад */
    if (testQuestionsCollected) {
      visibleGoBack = false;
    }

    /* Формирование шаблона Вопроса */
    questionsItemTemplate = data.map((currentItem, index) => {
      const { question, options } = currentItem;
      const numberOfQuestion = index + 1;
      let questionsOptionsTemplate = [];
      let visible = false;

      /* Формирование шаблона Опций Вопроса */
      questionsOptionsTemplate = options.map(curItem => (
        <StepOption
          key={curItem.content}
          type={curItem.type}
          question={question}
          content={curItem.content}
          hoverContent={curItem.hoverContent}
          value={curItem.value}
          numberOfQuestion={numberOfActiveStep}
          imgSrc={curItem.imgSrc || img1}
          handleOptionClick={addAnswer}
          handleGoNextQuestion={this.handleGoNextQuestion}
          handleOptionHover={setImage}
        />
      ));

      if (numberOfActiveStep === index) {
        visible = true;
      }

      /* Если это 4-й вопрос, кладем туда Input с DatePicker */
      if (numberOfQuestion === 4) {
        /* Обертка для функции записывания
        в стейт ответа с дефолтными аргументами,
        из инпута приходит только дата */
        const addAnswerWithArguments = (value) => {
          const inputQuestion = question;
          const number = numberOfActiveStep;
          const description = 'Выбранная дата';
          /* Когда выбирается дата, происходит переход на следующий слайд */
          this.handleGoNextQuestion();
          return addAnswer(inputQuestion, number, value, description);
        };

        questionsOptionsTemplate.push(
          <Input
            type="datepicker"
            hasIcon
            icon={calender}
            inputHandler={addAnswerWithArguments}
          />,
        );
      }

      return (
        <StepItem
          key={question}
          number={numberOfQuestion}
          questionsLength={stepsDataLength}
          question={question}
          optionsTemplate={questionsOptionsTemplate}
          visible={visible}
        />
      );
    });

    return (
      <Wrap>
        {questionsItemTemplate}
        {
          lastQuestion ? (
            <TestQuestionsForm submitHandler={addFormData} />
          ) : (
            ''
          )
        }
        {
          visibleGoBack ? (<GoBack onClick={this.handleGoBack}>Назад</GoBack>) : ''
        }
      </Wrap>
    );
  }
}

export default TestQuestionsOptions;
