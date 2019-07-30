import updatePokemonsList from './pokemon-list';
import updatePokemonDetails from './pokemon-details';

const reducer = (state, action) => {
  return {
    pokemonsList: updatePokemonsList(state, action),
    pokemonDetails: updatePokemonDetails(state, action)
  };
};

export default reducer;