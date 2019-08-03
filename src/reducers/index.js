import updatePokemonsList from './pokemon-list';
import updatePokemonDetails from './pokemon-details';
import updatePokemonSpecies from './pokemon-species';
import updatePokemonEvolutions from './pokemon-evolution';

const reducer = (state, action) => {
  return {
    pokemonsList: updatePokemonsList(state, action),
    pokemonDetails: updatePokemonDetails(state, action),
    pokemonSpecies: updatePokemonSpecies(state, action),
    pokemonEvolutions: updatePokemonEvolutions(state, action)
  };
};

export default reducer;