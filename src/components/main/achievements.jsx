import React from 'react';
import styled from 'styled-components';

const AchievementsHeader = styled.h2`
  margin-left: 1rem;
  color: #ed5a5c;
`;

const Achievements = props => {
  return (
    <div>
      <AchievementsHeader>Achievements</AchievementsHeader>
    </div>
  );
};

export default Achievements;
