import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 80%;
`;
const Container = styled.div`
  text-align: center;
  position: relative;
  top: 12.5%;
  margin: auto;
`;
const Heading = styled.h2``;
const OneLiner = styled.p`
  font-family: 'montserrat-lt';
  font-size: 1rem;
  opacity: 0.75;
`;
const FormContainer = styled.div`
  display: table;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  border-spacing: 24px 10px;
  border-collapse: separate;
`;
const FormRow = styled.div`
  display: table-row;
`;
const NameField = styled.input`
  display: table-cell;
  background-color: #eceaea;
  border-radius: 4px;
  border: 1px solid #b085f3;
  color: #f04e4e;
  font-family: 'montserrat-lt';
  font-size: 1rem;
  height: 48px;
  width: 240px;
  margin: auto 20px;
  padding-left: 1rem;
  &::placeholder {
    color: #00000023;
  }
`;
const EmailField = styled(NameField)``;
const CommentField = styled.textarea`
  /* display: table-cell; */
  background-color: #eceaea;
  border-radius: 4px;
  border: 1px solid #b085f3;
  color: #f04e4e;
  font-family: 'montserrat-lt';
  font-size: 1rem;
  height: 72px;
  width: 520px;
  padding-top: 0.5rem;
  padding-left: 1rem;
  resize: none;
  &::placeholder {
    color: #00000023;
  }
`;
const SendButton = styled.button`
  display: table-cell;
  width: 240px;
  height: 48px;
  border-radius: 24px;
  border-width: 0px;
  font-family: 'montserrat-lt';
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Contact = props => {
  return (
    <ContactContainer>
      <Container>
        <Heading>Liked my work? Contact Me or Hire Me?</Heading>
        <OneLiner>
          Send me an in-mail here or you can ping me on any social media
          platform links given in the sidebar.
        </OneLiner>
        <FormContainer>
          <FormRow>
            <NameField placeholder="Full Name" />
            <EmailField placeholder="Email Id" />
          </FormRow>
          <FormRow>
            <CommentField placeholder="Comment" rows="10" />
          </FormRow>
          <FormRow>
            <SendButton>Send</SendButton>
          </FormRow>
        </FormContainer>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
