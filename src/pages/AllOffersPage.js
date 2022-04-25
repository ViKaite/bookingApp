import React, {useContext} from 'react';
import SingleApartmentCard from "../components/SingleApartmentCard";
import mainContext from "../context/mainContext";
import DatePicker from "react-datepicker";

const AllOffersPage = () => {
    const {getPost, setPost, getUser} = useContext(mainContext)



    return (
        <div className="container d-flex wrap">
            {getPost.map((x, i) => <SingleApartmentCard getUser={getUser} setPost={setPost} post={x} key = {i}/>)}
        </div>
    );
};

export default AllOffersPage;