import React from 'react';
import './index.css';

const PokemonCard = (props) => {
  const { each, getDetails } = props;
  const { name, url } = each;
  const array = url.split('/');
  const id = array[array.length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const getInfo = () => {
    getDetails(id);
  };

  return (
    <li key={name}>
      <div className='card'>
        <img className='img' src={imageUrl} alt={name}/>
        <h2 className="">{name}</h2>
        <div className="card-overlay">
          <button type='button' onClick={getInfo}>Info</button>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
