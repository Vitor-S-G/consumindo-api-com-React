import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/action';

export default function Register() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.user.id);
  const nameStoraged = useSelector((state) => state.auth.user.nome);
  const emailStorageed = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;

    setNome(nameStoraged);
    setEmail(emailStorageed);
  }, [emailStorageed, id, nameStoraged]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres.');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if (!id && (password.length < 3 || password.length > 255)) {
      formErrors = true;
      toast.error('Senha deve ter entre 3 e 255 caracteres.');
    }

    if (formErrors) return formErrors;
    dispatch(actions.registerRequest({ nome, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar dados' : 'Crie sua Conta'}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu Nome"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua Senha"
          />
        </label>

        <button type="submit">{id ? 'Salvar' : 'Criar minha conta'}</button>
      </Form>
    </Container>
  );
}
