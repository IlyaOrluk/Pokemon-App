const updateItemDetails = (state, action) => {

    if (state === undefined) {
      return {
        item: [],
        loading: true,
        error: null
      };
    }
  
    switch (action.type) {
      case 'FETCH_ITEM_REQUEST':
        return {
          item: [],
          loading: true,
          error: null
        };
  
      case 'FETCH_ITEM_SUCCESS':
        return {
          item: action.payload,
          loading: false,
          error: null
        };
  
      case 'FETCH_ITEM_FAILURE':
        return {
          item: [],
          loading: false,
          error: action.payload
        };
  
      default:
        return state.itemDetails;
    }
  };
  
  export default updateItemDetails;