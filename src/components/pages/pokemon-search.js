import React from 'react';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { fetchItems, onSearchPokemon } from '../../actions';
import { compose } from '../../utils';
import { Link } from 'react-router-dom';

import './pokemon-search.css';

class PokemonSearch extends React.Component {

    componentDidMount() {
        this.props.fetchItems(0, this.props.itemsCount);

    }

    componentWillMount() {
        this.props.onSearchPokemon('')
    }


    searchPokemon = e => {
        this.props.onSearchPokemon(e.target.value)
    }

    filterPokemons(items, search) {
        if (search.length === 0) {
          return items;
        }
    
        return items.filter((item) => {
          return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
      }


    render() {
        const foundPokemons = this.filterPokemons(this.props.items, this.props.searchName);
        return (
            <div className='pokemon-search-page'>
                <h2>Search Pokemon By Name</h2>
                <input
                    placeholder='Type to search...'
                    onInput={this.searchPokemon}/>
                <div className='pokemon-search-list'>
                    {
                        foundPokemons.map((item, id) => {
                            return <Link key={id} to={`/pokemon/${item.name}`}>{item.name}</Link>
                        })
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({ pokemonsList: { items, loading, error, itemsCount, searchName } }) => {
    return { items, loading, error, itemsCount, searchName };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchItems: (pageSelected, listCount) => dispatch(fetchItems(storeService)(pageSelected, listCount)),
        onSearchPokemon: (name) => dispatch(onSearchPokemon(name))
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PokemonSearch);

