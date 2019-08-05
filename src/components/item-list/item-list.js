import React from 'react';

import { Link } from 'react-router-dom'

import './item-list.css';

const ItemList = ({ items, pageRouterSelected, listCount, onError }) => {
  return (
    <div className="item-list">
      {
        items.map((item, idx) => {
          return (
            <Link key={idx} className="show-item" to={`/pokemon/${item.name}`}>
              <img src={item.img} onError={() => onError(idx)} alt={'pokemon'}></img>
              <span>{item.name}</span>
            </Link>
          )
        })
      }
    </div>
  );
}

export default ItemList;

// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
