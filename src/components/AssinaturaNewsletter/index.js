import React from "react";
import styled from "styled-components";
import './AssinaturaNews.css'

const NewsletterWrapper = styled.div`
  width: 585px;
  height: 462px;
  margin-top: 210px;
  margin-left: 360px;
`;

const H2 = styled.h2`
  width: 181px;
  height: 27px;
  margin-bottom: 1px;
  top: 210px;
  left: 361px;
  opacity: 50%;
  color: rgba(32, 32, 32, 1);
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
`;

const P = styled.p`
  width: 481px;
  height: 99px;
  margin-top: 10px;
  top: 461px;
  left: 361px;
  opacity: 50%;
  color: rgba(32, 32, 32, 1);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  text-align: justify;
`;

const H1 = styled.h1`
  width: 375px;
  height: 188px;
  margin-top: 0px;
  margin-bottom: 0px;
  top: 249px;
  left: 360px;
  font-family: Elsie Swash Caps;
  font-size: 82px;
  font-weight: 900;
  line-height: 94px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(32, 32, 32, 1);
`;

const Input = styled.input`
  width: 585px;
  height: 73px;
  margin-top: 15px;
  top: 597px;
  left: 360px;
  border: none;
  box-shadow: 10px 10px 30px 0px;
`;

const Btn = styled.input`
  width: 194px;
  height: 75px;
  margin-top: 15px;
  top: 597px;
  left: 751px;
  box-shadow: 10px 10px 30px 0px;
  border: rgba(255, 203, 71, 0.3);
  background: rgba(255, 203, 71, 1);
  color: white;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const AssinaturaNewsletter = () => {
  return (
    <>
      <NewsletterWrapper>
        <H2>Sua casa com as</H2>
        <H1>Melhores plantas</H1>
        <P>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </P>
        <Form action="/enviar-email" method="post">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder=" Insira seu e-mail"
            required
          />
          <Btn id="btn" type="submit" value="Assinar newsletter" />
        </Form>
      </NewsletterWrapper>
    </>
  );
};

export default AssinaturaNewsletter;
