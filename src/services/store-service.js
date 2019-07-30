import axios from 'axios';
export default class storeService {

  _apiBase = 'https://pokeapi.co/api/v2';
  
  getResource = (url) => {
    const res = axios.get(`${this._apiBase}${url}`);
    return res;
  };

  getPokemonList = async (page, limit) => {
    const res = await this.getResource(`/pokemon/?offset=${page}&limit=${limit}`);
    console.log(res.data)
    return res.data;
  };

  getPokemon = async (pokemon) => {
    const res = await this.getResource(`/pokemon/${pokemon}/`);
    return res.data;
  };

}