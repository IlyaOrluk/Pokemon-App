import updateItemList from './item-list';
import updateItemDetails from './item-details';

const reducer = (state, action) => {
  return {
    itemList: updateItemList(state, action),
    itemDetails: updateItemDetails(state, action)
  };
};

export default reducer;