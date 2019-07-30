import React from 'react';

import { Link } from 'react-router-dom'

import './item-list.css';

const ItemList = ({ items, pageRouterSelected, listCount }) => {
  return (
    <div className="item-list">
      {
        items.map((item, idx) => {
          let pokemonId = idx + 1 + (pageRouterSelected * listCount);
          return (
            <div key={idx} className="show-item">
              <img src={'item.img'} alt={pokemonId}></img>
              <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
            </div>
          )
        })
      }
    </div>
  );
}

export default ItemList;

// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
