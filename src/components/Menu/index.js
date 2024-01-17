import React from "react";
import styled from "styled-components";
import "./Menu.css";

const Header = styled.header`
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  max-height: 50px;
  margin-right: 10px;
`;

const MenuDescricao = styled.div`
  display: flex;
  
`;

const DescricaoP = styled.p`
  width: 400px;
  height: 30px;
  text-align: right;
  font-family: Montserrat;
`;

const Button = styled.button`
  width: 130px;
  height: 20px;
  margin-right: 5px;
  top: 39px;
  left: 1453px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: right;
  border: none;
  background: white;
`;

const Menu = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo src="./img/logo.png" alt="Logo" />
          <MenuDescricao>
            <DescricaoP>
              Como fazer / Oferta / Depoimentos / Videos /
            </DescricaoP>
            <Button>Menu carrinho</Button>
          </MenuDescricao>
        </Container>
      </Header>
    </>
  );
};

export default Menu;
