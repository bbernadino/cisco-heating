import React from 'react';
import styled from 'styled-components';
import { CallButton as ContactButton } from '../Call/Call';

const ContactBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    height: unset;
    padding-bottom: 30px;
  }
`;

const ContactContent = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 15px;
  background-color: #FEFFFD;
  box-shadow: 0 15px 15px rgba(0,0,0, 0.90);
  margin: auto;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #2A2B19;
    margin-top: 25px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    height: unset;
    margin-bottom: 15px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  label {
    color: #2A2B19;
    font-weight: bold;
    align-self: flex-start;
  }

  .formFields {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .formFieldsInputs {
    width: 45%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
      width: 95%;
    }
  }

  .formFieldsMessage {
    width: 45%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
      width: 85%;
    }
  }
`;

const ContactField = styled.input`
  height: 40px;
  width: 95%;
  margin: 15px 0;
  padding-left: 15px;
  border-radius: 15px;
  border: 3px solid #2A2B19;
`;

const ContactMessage = styled.textarea`
  width: 100%;
  margin: 20px 0;
  padding: 15px;
  border-radius: 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  border: 3px solid #2A2B19;
`;

const ContactButtonBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding-bottom: 25px;
  }
`;


function Contact() {
  return (
    <ContactBox>
      <ContactContent>
        <h1>Contact us!</h1>
        <ContactForm>
          <div className="formFields">
            <div className="formFieldsInputs">
              <label>Your Name:</label>
              <ContactField
                name='name'
                type='text'
                placeholder='Name'
                // value={name}
                // onChange={e => setName(e.target.value)}
              /><label>Your Number:</label>
              <ContactField
                name='number'
                type='text'
                placeholder='Number'
                // value={number}
                // onChange={e => setNumber(e.target.value)}
              />
              <label>Your Email:</label>
              <ContactField
                name='email'
                type='email'
                placeholder='Email'
                // value={email}
                // onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="formFieldsMessage">
              <label>Your Message:</label>
              <ContactMessage
                name='message'
                type='string'
                placeholder='Please Leave a Message'
                // value={message}
                // onChange={e => setMessage(e.target.value)}
                rows={15}
              />
            </div>
          </div>
          <ContactButtonBox>
            <ContactButton type="submit">Submit</ContactButton>
          </ContactButtonBox>
        </ContactForm>
      </ContactContent>
    </ContactBox>
  );
}

export default Contact;
