import React from 'react';
import styled from 'styled-components';

import experiences from '../../tools/experiences';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const ExperiencesHeader = styled.h2`
  margin-left: 1rem;
  color: #ed5a5c;
`;
const ExperiencesContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background-color: #eaeaea;
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #eaeaea;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ed6467;
  }
`;
const CompanyContainer = styled.div`
  background-color: #eaeaea;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 5px;
`;
const Designation = styled.p`
  font-family: 'montserrat-b';
  margin: 5px 0 2px;
  color: #5b5f97;
`;
const CompanyName = styled.p`
  font-family: 'montserrat-sb';
  margin: 5px 0;
  color: #087e8b;
`;
const Duration = styled.p`
  font-family: 'montserrat-lt';
  font-size: 13px;
  margin: 0;
  color: #4f5d75;
`;
const Description = styled.p`
  font-family: 'montserrat-r';
  font-size: 15px;
  margin: 5px 0px;
  color: #654f6f;
`;

const FillExperiences = () => {
  return experiences.map(experience => {
    return (
      <CompanyContainer key={experience.key}>
        <Designation>{experience.designation}</Designation>
        <CompanyName>{experience.name}</CompanyName>
        <Duration>{experience.duration}</Duration>
        <Description>{experience.description}</Description>
      </CompanyContainer>
    );
  });
};

const Experiences = props => {
  return (
    <MainContainer>
      <ExperiencesHeader>Internships</ExperiencesHeader>
      <ExperiencesContainer>{FillExperiences()}</ExperiencesContainer>
    </MainContainer>
  );
};

export default Experiences;
