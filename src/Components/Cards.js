import React from 'react';

const  Cards = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/cathttps://robohash.org/${id}?200*200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}






export default Cards