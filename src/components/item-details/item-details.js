import React from 'react';
import { connect } from 'react-redux';

import { withStoreService } from '../hoc';
import { fetchItem } from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';


import './item-details.css';

const Detail = ({ item, field, label, itemTag }) => {
    return (
        React.createElement(itemTag, null, `${label} ${item[field]}`)
    );
};

const ItemDetails = ({ item, itemId, onAddedToCart, ...props }) => {
    const { name } = item;
    console.log(item)
    return (
        <div className='preview-item'>
            <img src={item.sprites.front_default} alt="game" className='item-details-img' />
            <div className='item-details'>
            <h4>{name}</h4>
                {
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })
                }
            </div>
        </div>
    );
}


class ItemDetailsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchItem(this.props.pokemon);
    }

    render() {
        console.log()

        const { item, loading, error } = this.props;
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            <React.Fragment>
                <ItemDetails
                    item={item}>
                    <Detail itemTag='span' label='Weight: ' field='weight' />
                    <Detail itemTag='span' label='Height: ' field='height' />
                </ItemDetails>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ itemDetails: { item, loading, error } }) => {
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
)(ItemDetailsContainer);
