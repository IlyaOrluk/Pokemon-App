import React from 'react';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import { fetchItems } from '../../actions';
import { compose } from '../../utils';
import { Link } from 'react-router-dom';

import './pokemon-search.css';

class PokemonSearch extends React.Component {

    componentDidMount() {
        this.props.fetchItems(0, this.props.itemsCount);
    }

    render() {
        return (
            <div className='pokemon-search-page'>
                <h2>Search Pokemon</h2>
                <input />
                <div className='pokemon-search-list'>
                    {
                        this.props.items.map((item) => {
                            return <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
                        })
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ pokemonsList: { items, loading, error, itemsCount } }) => {
    return { items, loading, error, itemsCount };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchItems: (pageSelected, listCount) => dispatch(fetchItems(storeService)(pageSelected, listCount))
    };
};

export default compose(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PokemonSearch);

