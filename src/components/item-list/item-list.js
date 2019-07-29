import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStoreService } from '../hoc';
import { fetchItems, handlePageNumber } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import { Link } from 'react-router-dom'
import Paginate from 'react-js-pagination';

import './item-list.css';

const ItemList = ({ items, pageRouterSelected, listCount }) => {
  return (
    <div className="item-list">
      {
        items.map((item, idx) => {
          let pokemonId = idx + 1 + (pageRouterSelected * listCount);
          return (
            <div key={idx} className="show-item">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt='pokemon'></img>
              <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
            </div>
          )
        })
      }
    </div>
  );
}


class ItemListContainer extends Component {


  componentDidMount() {
    const { pageRouterSelected, listCount } = this.props;
    this.props.fetchItems(pageRouterSelected * listCount, listCount);
  }

  componentWillUpdate(prevProps) {
    const { pageRouterSelected, listCount } = this.props;
    if (this.props.pageRouterSelected !== prevProps.pageRouterSelected) {
      this.props.fetchItems(pageRouterSelected * listCount, listCount);
      console.log(pageRouterSelected)
    }
  }

  // handlePageClick = () => {
  //   const { pageRouterSelected, listCount } = this.props;
  //   this.props.fetchItems(pageRouterSelected * listCount, listCount);
  //   console.log(pageRouterSelected-1)
  // }

  render() {
    const { items, loading, error, pageSelected, listCount, itemsCount, pageRouterSelected } = this.props;
    let pageCount = itemsCount / listCount;
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <React.Fragment>
        <ItemList
          listCount={listCount}
          pageRouterSelected={pageRouterSelected}
          items={items} />
          <Link className="logo" onClick={this.handlePageClick} to={`/pokemons/${pageRouterSelected}/`}>Prev</Link>
          <Link className="logo" onClick={this.handlePageClick} to={`/pokemons/${pageRouterSelected+2}/`}>Next</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ itemList: { items, pageSelected, listCount, itemsCount, loading, error } }) => {
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
)(ItemListContainer);
