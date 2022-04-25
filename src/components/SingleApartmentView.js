import React, {useContext} from 'react';
import mainContext from "../context/mainContext";



const SingleApartmentView = () => {
    const {getSinglePost} = useContext(mainContext)

    return (
        <div className="card">
            <h2 >{getSinglePost.description}</h2>
            <img className="img2"
                 src={getSinglePost.photos[1].photo}
                 alt=""/>
            <h3> {getSinglePost.city}</h3>
            <h3> {getSinglePost.price} eur</h3>

        </div>
    );
};

export default SingleApartmentView;