import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers:
  {Authorization:`Bearer ${process.env.API_KEY}`}
})
console.log(process.env.API_KEY);
export default instance
