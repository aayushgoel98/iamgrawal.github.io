import React, { Component } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../assets/Images/profile.jpg';

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
`;

const MenuWrapper = styled.div`
  background-color: #e3e2e2;
`;

const MenuList = styled.ul`
  list-style: none;
`;

const MenuListItem = styled.li`
  color: ${props => props.active ? '#f04e4e' : 'black' };
  padding: 5px 0;
`;

const SocialIconsWrapper = styled.div`
`;

export class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <ImageWrapper src={ProfileImg} alt="profile"/>
        <DescriptionWrapper />
        <MenuWrapper>
          <MenuList>
          <MenuListItem active>About Me</MenuListItem>
          <MenuListItem>My Experiences</MenuListItem>
          <MenuListItem>Achievements</MenuListItem>
          <MenuListItem>Projects</MenuListItem>
          <MenuListItem>Contact Me</MenuListItem>
          </MenuList>
        </MenuWrapper>
        <SocialIconsWrapper />
      </SidebarWrapper>
    )
  }
}

export default Sidebar
