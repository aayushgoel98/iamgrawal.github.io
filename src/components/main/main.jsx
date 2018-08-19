import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 80%;
  height: 100%;
  float: right;
  border-radius: 0 20px 20px 0;
`;

export class Main extends Component {
  render() {
    return (
      <MainContainer>
        <p>main container</p>
      </MainContainer>
    );
  }
}

export default Main;
