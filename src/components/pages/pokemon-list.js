import React from 'react';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { fetchItems, onImageError } from '../../actions';
import { compose } from '../../utils';

import ItemListContainer from '../item-list';

const PokemonList = ({ items, pageRouterSelected, fetchItems, listCount, itemsCount, loading, error, onImageError }) => {

  const onError = (id) => {
    onImageError(id);
    console.clear();
  }

  return (
    <div className='pokemon-list'>
      <ItemListContainer
          onError={onError}
          fetchItems={fetchItems}
          pageRouterSelected={pageRouterSelected}
          error={error}
          loading={loading}
          itemsCount={itemsCount}
          listCount={listCount}
          items={items} />
    </div>
  );
};

const mapStateToProps = ({ pokemonsList: { items, pageSelected, listCount, itemsCount, loading, error } }) => {
  return { items, pageSelected, listCount, itemsCount, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    fetchItems: (pageSelected, listCount) => dispatch(fetchItems(storeService)(pageSelected, listCount)),
    onImageError: (id) => dispatch(onImageError(id))
  };
};

export default compose(
  withService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PokemonList);

