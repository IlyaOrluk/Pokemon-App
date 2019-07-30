import React from 'react';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import { fetchItems, handlePageNumber } from '../../actions';
import { compose } from '../../utils';

import ItemListContainer from '../item-list';

const PokemonList = ({ items, pageRouterSelected, fetchItems, listCount, itemsCount, loading, error }) => {
  return (
    <React.Fragment>
      <ItemListContainer
          fetchItems={fetchItems}
          pageRouterSelected={pageRouterSelected}
          error={error}
          loading={loading}
          itemsCount={itemsCount}
          listCount={listCount}
          items={items} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ pokemonsList: { items, pageSelected, listCount, itemsCount, loading, error } }) => {
  return { items, pageSelected, listCount, itemsCount, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    fetchItems: (pageSelected, listCount) => dispatch(fetchItems(storeService)(pageSelected, listCount)),
    handlePageNumber: (number) => dispatch(handlePageNumber(number))
  };
};

export default compose(
  withStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PokemonList);

