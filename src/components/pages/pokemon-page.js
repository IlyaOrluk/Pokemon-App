import React from 'react';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import { fetchItem } from '../../actions';
import { compose } from '../../utils';

import ItemDetailsContainer from '../item-details';

const PokemonPage = ({ item, loading, error, fetchItem, pokemon }) => {
    return (
        <React.Fragment>
            <ItemDetailsContainer
                fetchItemValue={pokemon}
                fetchItem={fetchItem}
                error={error}
                loading={loading}
                item={item} />
        </React.Fragment>
    );
};

const mapStateToProps = ({ pokemonDetails: { item, loading, error } }) => {
    return { item, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchItem: (pokemon) => dispatch(fetchItem(storeService)(pokemon))
    };
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PokemonPage);
