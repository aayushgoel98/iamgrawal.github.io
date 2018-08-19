import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Sidebar from './sidebar/sidebar';
import './App.css';
import Main from './main/main';
import { Subscribe } from 'unstated';
import MainContainer from '../containers/mainContainer';

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
