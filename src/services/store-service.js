import axios from 'axios';
export default class storeService {

  _apiBase = 'https://pokeapi.co/api/v2';

  getResource = (url) => {
    const res = axios.get(`${this._apiBase}${url}`);
    return res;
  };

  getPokemonList = async (page, limit) => {
    const res = await this.getResource(`/pokemon/?offset=${page}&limit=${limit}`);
    return res.data.results.map(this.parcePokemons);
  };

  getPokemon = async (pokemon) => {
    const res = await this.getResource(`/pokemon/${pokemon}/`);
    return res.data;
  };

  getPokemonImage = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
};


  parcePokemons = (item) => {
    const id = this._extractId(item)
    return {
      name: item.name,
      img: this.getPokemonImage(id)
    }
  }
}