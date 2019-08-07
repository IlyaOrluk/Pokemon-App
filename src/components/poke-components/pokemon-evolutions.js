import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withService } from '../hoc';
import { fetchPokemonEvolutions, evolutionsRequested } from '../../actions';
import { compose } from '../../utils';

// import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

import './pokemon-evolutions.css';

class PokemonEvolutions extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            this.props.fetchPokemonEvolutions(this.props.url)
        }
    }

    componentWillMount() {
        evolutionsRequested();
    }

    render() {
        if (this.props.loading || this.props.evolutions.chain === undefined) {
            return (
                <React.Fragment>
                    <Spinner />
                    <h2>Finding Evolutions...</h2>
                </React.Fragment>

            )
        }

        if (this.props.error) {
            return <h1>No information...</h1>
        }

        const { levelOne, levelTwo } = this.props.evolutions.chain;
        console.log(this.props.evolutions.chain)
        return (
            <React.Fragment>
                <h2>Pokemon Evolutions</h2>
                <div className='pokemon-evolutions-chain'>
                    <Link className='pokemon-evolution' to={`/pokemon/${levelOne.name}`}>
                        <img src={levelOne.img} alt='firs-evolution' />
                        <span>{levelOne.name}</span>
                    </Link>
                    <div className='pokemon-evolutions'>
                        {
                            levelTwo.map((item, id) => {
                                const arrowNextEvo = (id < 1) ? <i className="fas fa-long-arrow-alt-right"></i> : null;
                                const nextEvo = item.levelTrhee ?
                                    <Link className='pokemon-evolution' to={`/pokemon/${item.levelTrhee.name}`}>
                                        {arrowNextEvo}
                                        <img src={item.levelTrhee.img} alt='third-evolution' />
                                        <span>{item.levelTrhee.name}</span>
                                    </Link> : null;

                                return (
                                    <React.Fragment key={id}>
                                        <div className='second-evolutions-chain'>
                                            <Link className='pokemon-evolution' to={`/pokemon/${item.name}`}>
                                                {arrowNextEvo}
                                                <img src={item.img} alt='second-evolution' />
                                                <span>{item.name}</span>
                                            </Link>
                                            {nextEvo}
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = ({ pokemonEvolutions: { evolutions, loading, error } }) => {
    return { evolutions, loading, error };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
    return {
        fetchPokemonEvolutions: (pokemon) => dispatch(fetchPokemonEvolutions(storeService)(pokemon))
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(PokemonEvolutions);