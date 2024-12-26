import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: 'b6d775e3d8a369a821aaae7a0c0e1053',
        language: 'pt-BR',
        page: 1
    }
});

export default api;