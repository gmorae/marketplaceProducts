import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './style.css';
import api from "../../service/api";

export default function NewUser() {
    const { register, handleSubmit } = useForm()

    const history = useHistory()

    async function onSubmit(data) {
        try {
            await api.post('users', data)
            alert('usuário criado com sucesso')
            history.push('/')
        } catch (error) {
            alert('erro ao cadastrar')
        }
    }
    return (
        <section className="newUser-container">
            <div>
                <h1>Cadastrar novo usuário</h1>
                <span>Insira os dados corretamente para cadastrar um novo usuário</span>
                <Link to="/" className="back-link">
                    <FiArrowLeft size={18} color="000" />
                    Voltar para a login
                </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    name="name_user"
                    placeholder="Nome do usuário"
                    ref={register({ required: true })}
                />
                <input
                    name="username"
                    placeholder="Nome para login"
                    ref={register({ required: true })}
                />
                <input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    ref={register({ required: true })}
                />

                <button className="btn">Cadastrar</button>

            </form>

        </section>
    )
}