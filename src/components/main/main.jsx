// import packages statements
import React from 'react';
import styled from 'styled-components';

// import components statements
import About from './about';
import Achievements from './achievements';
import Experiences from './experiences';
import Projects from './projects';
import Contact from './contact';

const MainContainer = styled.div`
  width: 80%;
  height: 100%;
  float: right;
  border-radius: 0 20px 20px 0;
`;

const Main = props => {
  const activeStateHandler = () => {
    switch (props.container.state.active) {
      case 'about':
        return <About />;
      case 'experiences':
        return <Experiences />;
      case 'achievement':
        return <Achievements />;
      case 'project':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        break;
    }
  };
  return <MainContainer>{activeStateHandler()}</MainContainer>;
};

export default Main;
