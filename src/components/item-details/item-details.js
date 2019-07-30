import React from 'react';
import './item-details.css';


const ItemDetails = ({ item, ...props }) => {
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

export default ItemDetails;