import React from 'react';

const SingleApartmentCard = ({post}) => {


    return (
        <div className="card m-20">

            <h2 >{post.description}</h2>
            <img className="img2" src={post.photos[0]?.photo} alt=""/>
            <h3> {post.city}</h3>
            <h3> {post.price} eur</h3>


        </div>
    );
};

export default SingleApartmentCard;