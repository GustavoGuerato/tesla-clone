/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>

      <Rightmenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account </a>
        <CustomMenu />
      </Rightmenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transformation: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const Rightmenu = styled.div`
  display: flex;
  align-items: center;
 
  a {
    font-weight: 600;
    text-transformation: uppercase;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  } ;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
