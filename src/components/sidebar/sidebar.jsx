import React, { Component } from 'react';
import styled from 'styled-components';

//import images statements
import ProfileImg from '../../assets/images/profile.jpg';
import github from '../../assets/icons/github.svg';
import google from '../../assets/icons/google.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';

const SidebarWrapper = styled.div`
  width: 20%;
  height: 100%;
  float: left;
  background-color: #EAEAEA;
  border-radius: 20px 0 0 20px;
  text-align: center;
`;

const ImageWrapper = styled.img`
  border-radius: 50%;
  border: 1px solid #b381f2;
  width: 60%;
  margin-top: 1.5rem;
`;

const DescriptionWrapper = styled.div`
  margin: 1.25rem 0;
`;

const NameWrapper = styled.p`
  font-family: 'montserrat-sb';
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const OneLinerWrapper = styled.p`
  font-family: 'montserrat-lt';
  font-size: 1rem;
  margin: 0.5rem 0;
  opacity: 0.75;
`;

const MenuWrapper = styled.div`
  background-color: #e3e2e2;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
  text-align: center;
`;

const MenuListItem = styled.li`
  color: ${props => props.active ? '#f04e4e' : 'black' };
  padding: 0.5rem 0;
  font-size: 18px;
`;

const SocialIconsWrapper = styled.div`
`;

const SocialIcon = styled.img`
  width: 24px;
  margin: 0.5rem;
`;

export class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <ImageWrapper src={ProfileImg} alt="profile"/>
        <DescriptionWrapper>
          <NameWrapper>Gaurav Rawal</NameWrapper>
          <OneLinerWrapper>A versatile developer.</OneLinerWrapper>
        </DescriptionWrapper>
        <MenuWrapper>
          <MenuList>
          <MenuListItem active>About Me</MenuListItem>
          <MenuListItem>My Experiences</MenuListItem>
          <MenuListItem>Achievements</MenuListItem>
          <MenuListItem>Projects</MenuListItem>
          <MenuListItem>Contact Me</MenuListItem>
          </MenuList>
        </MenuWrapper>
        <SocialIconsWrapper>
        <SocialIcon src={github}/>
        <SocialIcon src={google}/>
        <SocialIcon src={linkedin}/>
        <SocialIcon src={twitter}/>
        </SocialIconsWrapper>
      </SidebarWrapper>
    )
  }
}

export default Sidebar
