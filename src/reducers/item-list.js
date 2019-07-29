const updateItemList = (state, action) => {

  if (state === undefined) {
    return {
      items: [],
      pageSelected: 0,
      listCount: 30,
      itemsCount: 964,
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        items: [],
        pageSelected: state.itemList.pageSelected,
        listCount: state.itemList.listCount,
        itemsCount: state.itemList.itemsCount,
        loading: true,
        error: null
      };

    case 'FETCH_ITEMS_SUCCESS':
      return {
        items: action.payload,
        pageSelected: state.itemList.pageSelected,
        listCount: state.itemList.listCount,
        itemsCount: state.itemList.itemsCount,
        loading: false,
        error: null
      };

    case 'FETCH_ITEMS_FAILURE':
      return {
        items: [],
        pageSelected: state.itemList.pageSelected,
        listCount: state.itemList.listCount,
        itemsCount: state.itemList.itemsCount,
        loading: false,
        error: action.payload
      };

    case 'PAGE_NUMBER':
      return {
        items: state.itemList.items,
        pageSelected: action.payload,
        listCount: state.itemList.listCount,
        itemsCount: state.itemList.itemsCount,
        loading: false,
        error: null
      };

    default:
      return state.itemList;
  }
};

export default updateItemList;