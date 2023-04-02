import React from 'react';
import { StyledHeader, Logo, Nav, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import logo from '../assets/logo.svg';
import illustration from '../assets/illustration-mockups.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt='' />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community your fans will love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
          </div>

          <Image src={illustration} />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;