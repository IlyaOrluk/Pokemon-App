import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { fetchPokemonSpecies } from '../../actions';
import { compose } from '../../utils';

// import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './pokemon-species.css'

class PokemonSpecies extends React.Component {

    componentDidMount(){
        this.props.fetchPokemonSpecies(this.props.speciesUrl)
    }

    componentDidUpdate(prevProps) {
        if (this.props.speciesUrl !== prevProps.speciesUrl) {
            this.props.fetchPokemonSpecies(this.props.speciesUrl)
        }
    }

    render() {
        const { species: { name, genus, color, growh_rate, habitat, shape, varieties } } = this.props;

        if (this.props.loading) {
            return <Spinner />
        }

        if (this.props.error) {
            return <h1>No information...</h1>
        }

        return (
            <React.Fragment>
                <h2>Pokemon Species</h2>
                <div className='pokemon-species'>
                    <div className='species-category'>
                        <h3>Name:</h3>
                        <span>{name}</span>
                    </div>
                    <div className='species-category'>
                        <h3>Genus:</h3>
                        <span>{genus}</span>
                    </div>
                    <div className='species-category'>
                        <h3>Color:</h3>
                        <span>{color}</span>
                    </div>
                    <div className='species-category'>
                        <h3>Growh Rate:</h3>
                        <span>{growh_rate}</span>
                    </div>
                    <div className='species-category'>
                        <h3>Habitat:</h3>
                        <span>{habitat}</span>
                    </div>
                    <div className='species-category'>
                        <h3>Shape:</h3>
                        <span>{shape}</span>
                    </div>
                    <div className='species-category'>
                        <h3>Varieties:</h3>
                        {
                            varieties.map((item, id)=>{
                            return <Link key={id} to={`/pokemon/${item}`}>{item}</Link>
                            
                        })
                        }
                    </div>
                </div>
            </React.Fragment>

        );
    }
}


const mapStateToProps = ({ pokemonSpecies: { species, loading, error } }) => {
    return { species, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchPokemonSpecies: (pokemon) => dispatch(fetchPokemonSpecies(storeService)(pokemon))
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PokemonSpecies);