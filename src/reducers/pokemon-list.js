const updatePokemonsList = (state, action) => {

  if (state === undefined) {
    return {
      items: [],
      listCount: 30,
      itemsCount: 964,
      loading: true,
      error: null
    };
  }

  const noImage = 'https://pokemon-visualguide.com/assets/img/pokeball.png';

  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        items: [],
        listCount: state.pokemonsList.listCount,
        itemsCount: state.pokemonsList.itemsCount,
        loading: true,
        error: null
      };

    case 'FETCH_ITEMS_SUCCESS':
      return {
        items: action.payload,
        listCount: state.pokemonsList.listCount,
        itemsCount: state.pokemonsList.itemsCount,
        loading: false,
        error: null
      };

    case 'FETCH_ITEMS_FAILURE':
      return {
        items: [],
        listCount: state.pokemonsList.listCount,
        itemsCount: state.pokemonsList.itemsCount,
        loading: false,
        error: action.payload
      };

    case 'ITEM_IMAGE_ERROR':
      return {
        items: [
          ...state.pokemonsList.items.slice(0, action.payload),
          { name: state.pokemonsList.items[action.payload].name , img: noImage },
          ...state.pokemonsList.items.slice(action.payload + 1)
        ],
        listCount: state.pokemonsList.listCount,
        itemsCount: state.pokemonsList.itemsCount,
        loading: false,
        error: null
      }

    default:
      return state.pokemonsList;
  }
};

export default updatePokemonsList;