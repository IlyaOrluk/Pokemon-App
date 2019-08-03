import React from 'react';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import { fetchItem } from '../../actions';
import { compose } from '../../utils';

import ItemDetailsContainer from '../item-details';
import { PokemonSpecies, PokemonEvolutions } from '../poke-components';

const PokemonPage = ({ item, loading, error, fetchItem, pokemon, species }) => {
    return (
        <div className='preview-item-box'>
            <ItemDetailsContainer
                fetchItemValue={pokemon}
                fetchItem={fetchItem}
                error={error}
                loading={loading}
                item={item} />
                <PokemonSpecies speciesUrl={item.species}/>
                <PokemonEvolutions url={species.evolution_chain}/>
        </div>
    );
};

const mapStateToProps = ({ pokemonDetails: { item, loading, error }, pokemonSpecies: { species }}) => {
    return { item, loading, error, species };
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
