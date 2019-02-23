import React from 'react';
import Card from './Card';


const CardList = ({heroes}) => {
  return(
    <div>
      {
        heroes.map(function(heroe, i){
          return <Card id={heroes[i].id} name={heroes[i].name} thumbnailPath={heroes[i].thumbnail.path} thumbnailExtension = {heroes[i].thumbnail.extension}/>
        })
      }
    </div>
  )
}

export default CardList;
