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
    console.log(res.data)
    console.log(this.parcePokemon(res.data))
    return this.parcePokemon(res.data);
  };

  getPokemonImage = (id) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
};


  parcePokemons = (items) => {
    const id = this._extractId(items);
    return {
      name: items.name,
      img: this.getPokemonImage(id)
    }
  }

  parcePokemon = (item) => {
    let abilities = [], types = [], stats = [];
    item.abilities.forEach((item) => {
      abilities.push(item.ability.name)
    })
    item.types.forEach((item) => {
      types.push(item.type.name)
    })
    item.stats.forEach((item) => {
      stats.push({
        name: item.stat.name,
        stat: item.base_stat
      })
    })
    return {
      name: item.name,
      img: {
        front: item.sprites.front_default,
        back: item.sprites.back_default,
      },
      weight: item.weight/10+'kg',
      height: item.height/10+'m',
      base_exp: item.base_experience,
      abilities: abilities,
      types: types,
      stats: stats
    }
  }
}