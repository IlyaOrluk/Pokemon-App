const itemsLoaded = (newItem) => { 
  return {
    type: 'FETCH_ITEMS_SUCCESS',// [request_type]_[object]_[action]
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
    type: 'FETCH_ITEM_SUCCESS',// [request_type]_[object]_[action]
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

const handlePageNumber = (number) => {
  return {
    type: 'PAGE_NUMBER',
    payload: number
  };
}


const fetchItems = (service) => (pageNumber, listCount) => (dispatch) => {
  dispatch(itemsRequested());
  service.getPokemonList(pageNumber, listCount)
    .then((res) => dispatch(itemsLoaded(res.results)))
    .catch((err) => dispatch(itemsError(err)));
};

const fetchItem = (service) => (pokemon) => (dispatch) => {
  dispatch(itemRequested());
  service.getPokemon(pokemon)
    .then((res) => dispatch(itemLoaded(res)))
    .catch((err) => dispatch(itemError(err)));
};

export {
  fetchItems,
  fetchItem,
  handlePageNumber
};
