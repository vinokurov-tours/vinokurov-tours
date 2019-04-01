import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../../components/Button';
import userImg from '../../img/icons/user.svg';
import phoneImg from '../../img/icons/phone.svg';
import mailImg from '../../img/icons/mail.svg';
import accept from '../../img/icons/accept.svg';

const Disclaimer = styled.div`
  font-family: 'opensans';
  font-size: 12px;
  line-height: 16.5px;
  color: #474d57;
  margin-bottom: 32px;
  letter-spacing: normal;
`;

const Circle = styled.div`
  width: 130px;
  height: 130px;
  background-color: #ed1b24;
  border-radius: 50%;
  background-image: url(${accept});
  background-repeat: no-repeat;
  backgorund-size: 51.3px 39.1px;
  background-position: 50% 50%;
  margin-bottom: 24px;
`;

const Thanks = styled.p`
  font-family: 'GothamPro';
  font-weight: 900;
  font-size: 28px;
  line-height: 38.5px;
  color: #474d57;
  margin-bottom: 46px;
`;

class StepsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputsData: [
        {
          icon: userImg,
          placeholder: 'Имя',
          type: 'name',
          handler: this.setName,
        },
        {
          icon: phoneImg,
          placeholder: 'Телефон',
          type: 'phone',
          error: false,
          handler: this.setPhone,
        },
        {
          icon: mailImg,
          placeholder: 'Эл. почта',
          type: 'mail',
          handler: this.setMail,
        },
      ],
      name: '',
      phone: '',
      mail: '',
      dataSended: false,
    };
  }

  setName = (nameString) => {
    this.setState({ name: nameString });
  }

  setPhone = (phoneString) => {
    this.setState({ phone: phoneString });
  }

  setMail = (mailString) => {
    this.setState({ mail: mailString });
  }

  validateUserData = (e) => {
    e.preventDefault();
    const { submitHandler } = this.props;
    const {
      inputsData,
      name,
      phone,
      mail,
    } = this.state;
    const newInputsData = inputsData;
    const formDataObj = {};

    if (phone.length !== 17) {
      newInputsData[1].error = true;
      this.setState({ inputsData: newInputsData });
    } else {
      formDataObj.name = name;
      formDataObj.phone = phone;
      formDataObj.mail = mail;
      newInputsData[1].error = false;
      submitHandler(formDataObj);
      this.setState({
        inputsData: newInputsData,
        dataSended: true,
      });
    }
  }

  render() {
    const { inputsData, dataSended } = this.state;
    let inputsTemplate = [];

    inputsTemplate = inputsData.map(curItem => (
      <Input
        type={curItem.type}
        hasIcon
        icon={curItem.icon}
        placeholder={curItem.placeholder}
        inputHandler={curItem.handler}
        error={curItem.error}
      />
    ));

    return (
      <form>
        {
          dataSended ? (
            <>
              <Circle />
              <Thanks>Спасибо, что вы выбрали нас!</Thanks>
              <Button width={204} text="перейти на" />
            </>
          ) : (
            <>
              {inputsTemplate}
              <Disclaimer>
                Нажимая на кнопку "ОТПРАВИТЬ",
                вы даете согласие на обработку
                своих персональных данных.
              </Disclaimer>
              <Button width={170} text="отправить" handleClick={this.validateUserData} />
            </>
          )
        }
      </form>
    );
  }
}

export default StepsForm;