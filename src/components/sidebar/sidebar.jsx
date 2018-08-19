// import packages statements
import React from 'react';
import styled from 'styled-components';

// import images statements
import ProfileImg from '../../assets/images/profile.jpg';
import github from '../../assets/icons/github.svg';
import google from '../../assets/icons/google.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';

const SidebarWrapper = styled.div`
  width: 20%;
  height: 100%;
  float: left;
  background-color: #eaeaea;
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

const Name = styled.p`
  font-family: 'montserrat-sb';
  font-size: 1.25rem;
  margin: 0.5rem 0;
`;

const OneLiner = styled.p`
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
  color: ${props => (props.active ? '#f04e4e' : 'black')};
  padding: 0.5rem 0;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    color: #f04e4e;
  }
`;

const SocialIconsWrapper = styled.div``;

const SocialIcon = styled.img`
  width: 24px;
  margin: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Sidebar = props => {
  const menuList = [
    {
      name: 'About Me',
      keyName: 'about'
    },
    {
      name: 'My Experiences',
      keyName: 'experiences'
    },
    {
      name: 'Achievements',
      keyName: 'achievement'
    },
    {
      name: 'Projects',
      keyName: 'project'
    },
    {
      name: 'Contact Me',
      keyName: 'contact'
    }
  ];
  const socialIcons = [
    {
      name: 'github',
      src: github,
      link: 'https://github.com/iamgrawal'
    },
    {
      name: 'google',
      src: google,
      link: 'mailto:iamgrawal@gmail.com'
    },
    {
      name: 'linkedin',
      src: linkedin,
      link: 'https://linkedin.com/in/iamgrawal'
    },
    {
      name: 'twitter',
      src: twitter,
      link: 'https://twitter.com/iamgrawal'
    }
  ];
  const handleMenuChange = keyName => {
    props.container.setState({ active: keyName });
  };
  return (
    <SidebarWrapper>
      <ImageWrapper src={ProfileImg} alt="profile" />
      <DescriptionWrapper>
        <Name>Gaurav Rawal</Name>
        <OneLiner>A versatile developer.</OneLiner>
      </DescriptionWrapper>
      <MenuWrapper>
        <MenuList>
          {menuList.map(item => {
            return (
              <MenuListItem
                key={item.keyName}
                active={props.container.state.active === item.keyName}
                onClick={() => handleMenuChange(item.keyName)}
              >
                {item.name}
              </MenuListItem>
            );
          })}
        </MenuList>
      </MenuWrapper>
      <SocialIconsWrapper>
        {socialIcons.map(item => {
          return (
            <a href={item.link} key={item.name}>
              <SocialIcon alt={item.name} src={item.src} />
            </a>
          );
        })}
      </SocialIconsWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
