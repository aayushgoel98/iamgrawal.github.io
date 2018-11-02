// import packages statements
import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Subscribe } from 'unstated';

import Main from './main';
// import components statements
import Sidebar from './sidebar';
import MainContainer from '../containers/mainContainer';

// import stylesheets statements
import './App.css';

// import assets statements
import resumeImg from '../assets/icons/resume.svg';
import resume from "../assets/documents/Gaurav's Resume.pdf";

injectGlobal`
  button {
    background-color: #f04e4e;
    color: #fff;
    border-radius: 50%;
  }
`;

const ContainerWrapper = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 85%;
  width: 85%;
  position: absolute;
  border-radius: 20px;
  background-color: #fff;
  font-family: 'montserrat-r';
`;
const ResumeDiv = styled.img`
  position: absolute;
  z-index: 2;
  animation: blinking 1s infinite;
  top: 16px;
  right: 16px;
  width: 48px;
  @keyframes blinking {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

class App extends Component {
  createBubbles = () => {
    let bubbleList = [];
    for (let i = 0; i < 200; i++) {
      bubbleList.push(<div className="bubble" key={i} />);
    }
    return bubbleList;
  };
  render() {
    return (
      <div>
        <div className="bottom-particles">{this.createBubbles()}</div>
        <a href={resume} target="_blank">
          <ResumeDiv src={resumeImg} alt="resume icon" />
        </a>
        <ContainerWrapper>
          <Sidebar />
          <Subscribe to={[MainContainer]}>
            {mainContainer => {
              return <Main container={mainContainer} />;
            }}
          </Subscribe>
        </ContainerWrapper>
      </div>
    );
  }
}

export default App;
