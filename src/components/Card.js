import React from 'react';

const Card = (props) => {
    //`https://robohash.org/${props.id}100x100`

    //`${props.thumbnailPath}. ${props.thumbnailExtension}`

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
      <img src={`${props.thumbnailPath}.${props.thumbnailExtension}`} alt="heroes" width='150px'/>
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Card;
