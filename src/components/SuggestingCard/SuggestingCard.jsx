import React from 'react';
import {Card, RoundButton} from './SuggestingCard.style';

const Suggesting = ({image, name, info, id}) => {
  return (
    <Card>
      <div className='suggesting__meta'>
        <img className='suggesting__image' src={image} alt='' />
        <div className='suggesting__titles'>
          <span className='suggesting__name'>{name} </span>
          <span className='suggesting__info'>{info} </span>
        </div>
      </div>
      <RoundButton label='Add' />
    </Card>
  );
};

export default Suggesting;
