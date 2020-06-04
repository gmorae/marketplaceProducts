import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
import { useForm } from "react-hook-form";

import './style.css';
import api from '../../service/api'

function NewProduct() {

  const { register, handleSubmit, setValue } = useForm()

  const history = useHistory()

  const id_product = +history.location.pathname.split('/')[2] || null

  var title = '', button = ''

  id_product !== null ? title = 'Editar produto' : title = 'Cadastrar novo produto'

  id_product !== null ? button = 'Editar' : button = 'Cadastrar'

  if (id_product !== null) {
    api.get(`product/${id_product}`)
      .then(res => {
        register(setValue('name_product', res.data.name_product))
        register(setValue('category', res.data.category))
        register(setValue('price', res.data.price))
        register(setValue('image', res.data.image))
        register(setValue('description', res.data.description))
      })
  }

  async function onSubmit(data) {

    try {

      id_product !== null ? api.put(`product/${id_product}`, data) : api.post('product', data)
      history.push('/home')

    } catch (error) {

      alert('Erro ao cadastrar o produto, tente novamente ou mais tarde')

    }

  }

  return (
    <section className="newProduct-container">
      <div>
        <h1>{title}</h1>
        <span>Insira os dados corretamente para cadastrar um novo produto</span>
        <Link to="/home" className="back-link">
          <FiArrowLeft size={18} color="000" />
          Voltar para a home
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          name="name_product"
          placeholder="Nome do produto"
          ref={register({ required: true })}
          defaultValue={register}
        />
        <input
          name="category"
          placeholder="Categoria"
          ref={register({ required: true })}
        />
        <input
          name="price"
          placeholder="Preço"
          ref={register({ required: true })}
        />
        <input
          name="image"
          placeholder="Link da imagem"
          ref={register({ required: true })}
        />
        <textarea
          name="description"
          placeholder="Escreva a descrição do seu produto aqui..."
          ref={register}
        />
        <button type="submit" className="btn">{button}</button>

      </form>

    </section>
  );
}

export default NewProduct;