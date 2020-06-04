import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

import api from "../../service/api";
import './style.css';
import banner from '../../assets/bannerLogin.svg'

export default function Login() {

  const { register, handleSubmit } = useForm()

  const history = useHistory()

  async function submitLogin(data) {
    try {

      const response = await api.post('login', data)
      localStorage.setItem('name', response.data.name_user)
      localStorage.setItem('id', response.data.id_user)
      history.push('home')

    } catch (error) {
      alert('erro ao fazer o login')
    }
  }

  const sendToRegister = () => history.push('/register')

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit(submitLogin)}>
        <input
          name="username"
          placeholder="Nome do usuário"
          ref={register}
        />

        <input
          name="password"
          placeholder="Senha"
          type="password"
          ref={register}
        />

        <button className="btn btn-color">Entrar</button>
        <button className="btn btn-color" onClick={() => sendToRegister()} >Cadastrar novo usuário</button>
      </form>
      <img src={banner} alt="banner login" />
    </main>
  );
}