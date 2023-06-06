import axios from 'axios'

const catApi = axios.create({
    baseURL: 'http://localhost:8000/cats/api/cats/'
})

const imageApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_yajT9ALrHEvFPItffUkUcnZG1VIBnIRN9vtSu7jJSmILcTqqFmlfBqBkuvL0MWQ9'
})

export const getAllCats = () => catApi.get('/');
export const getCat = (id) => catApi.get(`/${id}/`);
export const createCat = (cat) => catApi.post('/', cat);
export const deleteCat = (id) => catApi.delete(`/${id}`);
export const updateCat = (id, cat) => catApi.put(`/${id}/`, cat);
