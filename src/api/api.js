import axios from 'axios';

const baseUrl='https://shopping-list-11.herokuapp.com';

const API =axios.create({baseURL:baseUrl});

export const login=(data)=>API.post('/login',data);
export const register=(data)=>API.post('/signUp',data);
export const getAll=()=>API.get('/products');
export const filter=(data)=>API.post('/filter',data);