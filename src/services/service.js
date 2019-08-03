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
    console.log(this.parcePokemon(res.data))
    return this.parcePokemon(res.data);
  };

  getPokemonSpecies = async (url) => {
    const res = await axios.get(url);
    // console.log(res.data)
    return this.parcePokemonSpecies(res.data);
  };

  getPokemonEvolutionChain = async (url) => {
    const res = await axios.get(url);
    console.log(res.data.chain.species.url)
    // console.log(this.parcePokemonEvolutions(res.data))
    return this.parcePokemonEvolutions(res.data);
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
      stats: stats,
      species: item.species.url
    }
  }

  parcePokemonSpecies = (item) => {
    let varieties = [];
    item.varieties.forEach((item) => {
      varieties.push(item.pokemon.name)
    })
    return {
      name: item.name,
      color: item.color.name,
      habitat: item.habitat.name,
      shape: item.shape.name,
      growh_rate: item.growth_rate.name,
      varieties: varieties,
      genus: item.genera[2].genus,
      evolution_chain: item.evolution_chain.url
    }
  }

  parcePokemonEvolutions = (item) => {
    let levelTwoEvoArr = [];
    item.chain.evolves_to.forEach((item) => {
      if (item.evolves_to[0] === undefined) {
        levelTwoEvoArr.push({
          name: item.species.name,
          img: this.getPokemonImage(this._extractId(item.species)),
          levelTrhee: null
        })
      } else {
      levelTwoEvoArr.push({
        name: item.species.name,
        img: this.getPokemonImage(this._extractId(item.species)),
        levelTrhee: {
          name: item.evolves_to[0].species.name,
          img: this.getPokemonImage(this._extractId(item.evolves_to[0].species))
        }
      })
    }
    })
    return {
      chain: {
        levelOne: {
          name: item.chain.species.name,
          img: this.getPokemonImage(this._extractId(item.chain.species))
        },
        levelTwo: levelTwoEvoArr,
      }

    }
  }
}

// https://pokeapi.co/api/v2/pokemon/?limit=964  poke input search list...