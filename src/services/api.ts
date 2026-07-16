// instalei o axios para fazer as requicicoes
// criei o .env para colocar a chave da api e adicionei no gitignore

import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// o process. tava dando erro e adicionei "types": ["node"] no tsconfig.json para resolver o problema

// é minha primeira vez usando o axios, então não sei se é a melhor forma de fazer, mas pelo que entendi
// criei uma instancia do axios com a baseURL e os parametros que vou usar em todas as requisições
// e depois exportei essa instancia para usar em outros arquivos


const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "pt-BR",
  },
});

export default api;

// na documentacao da para fazer tambem usando o jwt, mas assim fica mais simples e direto