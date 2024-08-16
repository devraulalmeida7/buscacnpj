import axios from "axios";

const api = axios.create({
    baseURL: "https://brasiapi.com.br/api/cnpj/v1/"
})

export default api;