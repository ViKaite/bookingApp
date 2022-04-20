import React, {useContext} from 'react';
import SingleApartmentCard from "../components/SingleApartmentCard";
import mainContext from "../context/mainContext";

const AllOffersPage = () => {
    const {getPost, setPost} = useContext(mainContext)



    return (
        <div className="container d-flex wrap">
            {getPost.map((x, i) => <SingleApartmentCard post={x} key = {i}/>)}
        </div>
    );
};

export default AllOffersPage;