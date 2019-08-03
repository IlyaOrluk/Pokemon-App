import React from 'react';

import ItemDetails from './item-details';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';


const Detail = ({ item, field, label, itemTag }) => {
    return (
        React.createElement(itemTag, null, `${label} ${item[field]}`)
    );
};

class ItemDetailsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchItem(this.props.fetchItemValue);
    }

    componentDidUpdate(prevProps) {
        if (this.props.fetchItemValue !== prevProps.fetchItemValue) {
            this.props.fetchItem(this.props.fetchItemValue)
        }
    }

    render() {
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
                    <Detail itemTag='span' label='Abilities: ' field='abilities' />
                    <Detail itemTag='span' label='Type(s): ' field='types' />
                </ItemDetails>
            </React.Fragment>
        );
    }
}

export default ItemDetailsContainer;