import React from 'react';
import styled from 'styled-components';

import profileImage from '../../assets/images/profile.jpg';

const AboutJumbotron = styled.div`
  display: inline-flex;
`;
const ImageMain = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  transform: translateX(20%) translateY(10%);
  animation: bounceBack 1s;
  @keyframes bounceBack {
    0% {
      transform: translateX(20%) translateY(15%);
    }
    50% {
      transform: translateX(20%) translateY(0%);
    }
    100% {
      transform: translateX(20%) translateY(5%);
    }
  }
`;
const AboutDescription = styled.div`
  text-align: center;
  width: 60%;
  margin: 8% auto auto 10%;
  color: #7b1fa2;
`;
const SectionHeading = styled.h1`
  margin-left: 1rem;
  color: #ed5a5c;
`;
const SectionPara = styled.p`
  margin-left: 1rem;
`;
const SectionBubblesList = styled.div`
  display: table;
  text-align: center;
  border-collapse: separate;
  border-spacing: 2rem 0;
  margin: 2rem 1rem;
`;
const SectionBubbles = styled.div`
  display: table-cell;
  margin: 1rem;
  padding: 1rem;
  width: 6rem;
  height: 2rem;
  color: #fff;
  background-color: #7b1fa2;
  border-radius: 4px;
  line-height: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
const ArticleLink = styled.a`
  color: #7b1fa2;
  text-decoration: underline;
`;
const About = props => {
  return (
    <div>
      <AboutJumbotron>
        <ImageMain src={profileImage} />
        <AboutDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          temporibus? Accusantium quod amet sequi molestias mollitia quo eveniet
          explicabo, dignissimos neque magnam itaque sapiente ea at fuga vero
          placeat dolor!
        </AboutDescription>
      </AboutJumbotron>
      <section>
        <SectionHeading>Technologies</SectionHeading>
        <SectionPara>
          These are the technologies that I have worked:
        </SectionPara>
        <SectionBubblesList>
          <SectionBubbles>React.js</SectionBubbles>
          <SectionBubbles>Angular</SectionBubbles>
          <SectionBubbles>HTML/CSS</SectionBubbles>
          <SectionBubbles>Node.js</SectionBubbles>
          <SectionBubbles>Android</SectionBubbles>
          <SectionBubbles>Python</SectionBubbles>
        </SectionBubblesList>
      </section>
      <section>
        <SectionHeading>Articles</SectionHeading>
        <SectionPara>
          You can checkout some of the articles/tutorials written by me:
          {'  '}
          <ArticleLink href="https://medium.com/@iamgrawal" target="_blank">
            Medium
          </ArticleLink>
          {',  '}
          <ArticleLink
            href="https://gitall.tech/project/midi-mixer/"
            target="_blank"
          >
            GitAll
          </ArticleLink>
        </SectionPara>
      </section>
    </div>
  );
};

export default About;
