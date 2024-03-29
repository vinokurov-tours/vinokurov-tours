import React, { Component } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import MaskedInput from 'react-text-mask';
import dropdown from '../../img/icons/dropdown-arow.svg';

const OutterWrap = styled.div`
  margin-bottom: 16px;
`;

const Wrap = styled.div`
  position: relative;
  width: 370px;
  height: 56px;
  padding-left: 54px;
  border-top: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    border-top: 1px solid #aeaeae;
    border-right: 1px solid #aeaeae;
    border-bottom: 1px solid #aeaeae;
  }
  &.input-wrap_focused {
    border-top: 1px solid #aeaeae;
    border-right: 1px solid #aeaeae;
    border-bottom: 1px solid #aeaeae;
  }
  .react-date-picker {
    width: 100%;
    height: 100%;
  }
  .react-date-picker__wrapper {
    width: 100%;
    height: 100%;
    border: 0px;
    padding-left: 24px;
    font-family: 'opensans';
    font-size: 16px;
    line-height: 54px;
  }
  .react-date-picker__wrapper input,
  .react-date-picker__wrapper span {
    color: #aeaeae;
  }
  &:hover .react-date-picker__wrapper input,
  &:hover .react-date-picker__wrapper span,
  &:hover .input-wrap__choose-date {
    color: #474d57;
  }
  & input::-webkit-input-placeholder {
    color: #aeaeae;
  }
  & input::-moz-placeholder {
    color: #aeaeae;
  }
  & input:-moz-placeholder {
    color: #aeaeae;
  }
  & input:-ms-input-placeholder {
    color: #aeaeae;
  }
  &:hover input,
  &:hover input::-webkit-input-placeholder,
  &.input-wrap_focused input::-webkit-input-placeholder {
    color: #474d57;
  }
  &:hover input::-moz-placeholder,
  &.input-wrap_focused input::-moz-placeholder {
    color: #474d57;
  }
  &:hover input:-moz-placeholder,
  &.input-wrap_focused input:-moz-placeholder {
    color: #474d57;
  }
  &:hover input:-ms-input-placeholder,
  &.input-wrap_focused input:-ms-input-placeholder {
    color: #474d57;
  }
  &.input-wrap_focused input,
  &.input-wrap_focused .input-wrap__choose-date,
  &.input-wrap_focused .react-date-picker__wrapper input,
  &.input-wrap_focused .react-date-picker__wrapper span {
    color: #474d57;
  }
  &.input-wrap_choose-date-hidden .input-wrap__choose-date {
    display: none;
  }
 ${(props) => {
    if (props.theme === 'transparent') {
      return (
        `
        padding-left: 0px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        background: transparent;
        border-top: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
        border-bottom: 1px solid #ffffff;
        border-left: 1px solid #ffffff;
        
        &:hover,
        &.input-wrap_focused {
          border-top: 2px solid #ffffff;
          border-right: 2px solid #ffffff;
          border-bottom: 2px solid #ffffff;
          border-left: 2px solid #ffffff;
        }
        & input,
        &:hover input,
        &.input-wrap_focused input {
          color: #ffffff;
          background: transparent;
        }
        &.input-wrap_focused input::-webkit-input-placeholder,
        &:hover input::-webkit-input-placeholder,
        & input::-webkit-input-placeholder {
          color: #ffffff;
          opacity: 0.7;
        }
        &.input-wrap_focused input::-moz-placeholder,
        &:hover input::-moz-placeholder,
        & input::-moz-placeholder {
          color: #ffffff;
          opacity: 0.7;
        }
        &.input-wrap_focused input:-moz-placeholder,
        &:hover input:-moz-placeholder,
        & input:-moz-placeholder {
          color: #ffffff;
          opacity: 0.7;
        }
        &.input-wrap_focused input:-ms-input-placeholder,
        &:hover input:-ms-input-placeholder,
        & input:-ms-input-placeholder {
          color: #ffffff;
          opacity: 0.7;
        }
        `);
    }
    return true;
  }
};
  @media screen and (max-width: 576px) {
    width: 324px;
  }
`;

const IconBlock = styled.div`
  position: absolute;
  width: 54px;
  height: 56px;
  background-color: #ed1b24;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  top: -1px;
  left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
`;

const InputElem = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  border: 0px;
  padding-left: 24px;
  font-family: 'opensans';
  font-size: 16px;
  line-height: 54px;
  color: #aeaeae;
  &:hover {
    color: #aeaeae;
  }
`;

const DatePickerIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  background-size: 10px 5px;
  background-position: 7px 9.5px;
`;

const DatePickerHideInitialDate = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 54px;
  width: 200px;
  padding-left: 24px;
  font-family: 'opensans';
  font-size: 16px;
  line-height: 54px;
  color: #aeaeae;
  background-color: #ffffff;
`;

const Icon = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
`;

const ErrorMessage = styled.div`
  display: inline-block;
  font-family: 'opensans';
  font-size: 10px;
  line-height: 14px;
  color: #ed1b24;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      isDateChanged: false,
      inputData: '',
      isOpen: false,
    };

    this.inputWrap = React.createRef();
  }

  handleChangeDate = (date) => {
    const { inputHandler } = this.props;
    const { isDateChanged } = this.state;
    const InputWrapClassName = this.inputWrap.current.className;
    const newDate = date;
    if (!isDateChanged) {
      this.inputWrap.current.className = `${InputWrapClassName} input-wrap_choose-date-hidden`;
    }

    inputHandler(newDate);

    this.setState({
      date: newDate,
      isDateChanged: true,
    });
  }

  handleToggleDatePicker = () => {
    const InputWrapClassName = this.inputWrap.current.className;
    if (InputWrapClassName.indexOf('input-wrap_focused') === -1) {
      this.inputWrap.current.className = `${InputWrapClassName} input-wrap_focused`;
      this.setState({ isOpen: true });
    } else {
      this.inputWrap.current.className = InputWrapClassName.replace('input-wrap_focused', '');
      this.setState({ isOpen: false });
    }
  }

  handleNameChange = (e) => {
    const { inputHandler } = this.props;
    const name = e.target.value;
    const regExpr = new RegExp(/^[а-яА-Яa-zA-Z\s-ё]*$/);
    const isNameValid = regExpr.test(name);

    if (isNameValid) {
      inputHandler(name);

      this.setState({
        inputData: name,
      });
    }
  }

  handlePhoneChange = (e) => {
    const { inputHandler } = this.props;
    const input = e.target;
    const number = input.value;
    const regExpr = /\d+/g;
    const editedNumber = number.match(regExpr).join('');

    if (editedNumber.length === 11) {
      inputHandler(number);

      this.setState({
        inputData: number,
      });
    } else {
      inputHandler('');

      this.setState({
        inputData: number,
      });
    }
  };

  handleMailChange = (e) => {
    const { inputHandler } = this.props;
    const input = e.target;
    const email = input.value;

    inputHandler(email);

    this.setState({
      inputData: email,
    });
  }

  handleInputFocus = () => {
    const InputWrapClassName = this.inputWrap.current.className;
    this.inputWrap.current.className = `${InputWrapClassName} input-wrap_focused`;
  }

  handleInputBlur = () => {
    const InputWrapClassName = this.inputWrap.current.className;
    this.inputWrap.current.className = InputWrapClassName.replace('input-wrap_focused', '');
  }

  handleChooseDateClick = () => {
    this.setState({ isOpen: true });
  }

  render() {
    const {
      icon,
      hasIcon,
      type,
      placeholder,
      error,
      theme,
    } = this.props;
    const {
      inputData,
      date,
      isOpen,
    } = this.state;

    let inputType = null;
    switch (type) {
      case 'datepicker':
        inputType = (
          <div>
            <DatePicker
              isOpen={isOpen}
              onChange={this.handleChangeDate}
              value={date}
              minDate={date}
              clearIcon={null}
              calendarIcon={
                <DatePickerIcon />
              }
              onCalendarOpen={this.handleToggleDatePicker}
              onCalendarClose={this.handleToggleDatePicker}
            />
            <DatePickerHideInitialDate className="input-wrap__choose-date" onClick={this.handleChooseDateClick}>Выберите дату</DatePickerHideInitialDate>
          </div>
        );
        break;
      case 'name':
        inputType = (
          <InputElem
            placeholder={placeholder}
            onChange={this.handleNameChange}
            value={inputData}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        );
        break;
      case 'phone':
        inputType = (
          <MaskedInput
            mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholder={placeholder}
            guide
            onChange={this.handlePhoneChange}
            keepCharPositions
            value={inputData}
            render={(ref, props) => (
              <InputElem ref={ref} {...props} />
            )}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        );
        break;
      case 'email':
        inputType = (
          <InputElem
            placeholder={placeholder}
            theme={theme}
            value={inputData}
            onChange={this.handleMailChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />
        );
        break;
      default:
        inputType = (
          <InputElem
            placeholder={placeholder}
            onChange={this.handleNameChange}
          />
        );
    }

    return (
      <OutterWrap>
        <Wrap theme={theme} ref={this.inputWrap}>
          {
            hasIcon ? (
              <IconBlock>
                <Icon src={icon} />
              </IconBlock>
            ) : (
              ''
            )
          }

          {inputType}
        </Wrap>
        {
          error ? (
            <ErrorMessage>Введите номер полностью</ErrorMessage>
          ) : (
            ''
          )
        }
      </OutterWrap>
    );
  }
}
