import Axios from "axios";

const api = Axios.create({
  baseURL: 'https://product-api-2020.herokuapp.com/'
})

export default api