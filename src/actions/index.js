// [request_type]_[object]_[action]
const itemsLoaded = (newItem) => { 
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: newItem
  };
};

const itemsRequested = () => {
  return {
    type: 'FETCH_ITEMS_REQUEST'
  };
};

const itemsError = (error) => {
  return {
    type: 'FETCH_ITEMS_FAILURE',
    payload: error
  };
};

const itemLoaded = (newItem) => { 
  return {
    type: 'FETCH_ITEM_SUCCESS',
    payload: newItem
  };
};

const itemRequested = () => {
  return {
    type: 'FETCH_ITEM_REQUEST'
  };
};

const itemError = (error) => {
  return {
    type: 'FETCH_ITEM_FAILURE',
    payload: error
  };
};

const speciesLoaded = (species) => { 
  return {
    type: 'FETCH_SPECIES_SUCCESS',
    payload: species
  };
};

const speciesRequested = () => {
  return {
    type: 'FETCH_SPECIES_REQUEST'
  };
};

const speciesError = (error) => {
  return {
    type: 'FETCH_SPECIES_FAILURE',
    payload: error
  };
};

const evolutionsLoaded = (species) => { 
  return {
    type: 'FETCH_EVOLUTIONS_SUCCESS',
    payload: species
  };
};

const evolutionsRequested = () => {
  return {
    type: 'FETCH_EVOLUTIONS_REQUEST'
  };
};

const evolutionsError = (error) => {
  return {
    type: 'FETCH_EVOLUTIONS_FAILURE',
    payload: error
  };
};

const onImageError = (id) => {
  return {
    type: 'ITEM_IMAGE_ERROR',
    payload: id
  }
}

const onSearchPokemon = (name) => {
  console.log(name)
  return {
    type: 'ITEM_SEARCH_NAME',
    payload: name
  }
}
// [request_type]_[object]_[action]



const fetchItems = (service) => (pageNumber, listCount) => (dispatch) => {
  dispatch(itemsRequested());
  service.getPokemonList(pageNumber, listCount)
    .then((res) => dispatch(itemsLoaded(res)))
    .catch((err) => dispatch(itemsError(err)));
};

const fetchItem = (service) => (pokemon) => (dispatch) => {
  dispatch(itemRequested());
  service.getPokemon(pokemon)
    .then((res) => dispatch(itemLoaded(res)))
    .catch((err) => dispatch(itemError(err)));
};

const fetchPokemonSpecies = (service) => (pokemon) => (dispatch) => {
  dispatch(speciesRequested());
  service.getPokemonSpecies(pokemon)
    .then((res) => dispatch(speciesLoaded(res)))
    .catch((err) => dispatch(speciesError(err)));
};

const fetchPokemonEvolutions = (service) => (pokemon) => (dispatch) => {
  dispatch(evolutionsRequested());
  service.getPokemonEvolutionChain(pokemon)
    .then((res) => dispatch(evolutionsLoaded(res)))
    .catch((err) => dispatch(evolutionsError(err)));
};

export {
  fetchItems,
  fetchItem,
  fetchPokemonSpecies,
  fetchPokemonEvolutions,
  onImageError,
  onSearchPokemon
};
