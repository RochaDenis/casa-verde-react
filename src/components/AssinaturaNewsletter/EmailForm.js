import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: row; /* Ajustado para uma direção de linha */
  align-items: center;
`;

const Input = styled.input`
  width: 595px;
  height: 73px;
  margin-right: 0px; /* Ajuste a margem para separar o input do botão */
  border: none;
  box-shadow: 10px 10px 30px 0px;
`;

const Button = styled.button`
  width: 200px;
  height: 75px;
  box-shadow: 10px 10px 30px 0px;
  border: rgba(255, 203, 71, 0.3);
  background: rgba(255, 203, 71, 1);
  color: white;
`;

const EmailForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'O e-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Formato de e-mail inválido';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('E-mail enviado:', values.email);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder=" Insira seu e-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required
      />
      <Button type="submit">Assinar newsletter</Button>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
    </Form>
  );
};

export default EmailForm;
