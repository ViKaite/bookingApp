import React, {useContext} from 'react';
import CreateApartmentOffer from "../components/CreateApartmentOffer";
import mainContext from "../context/mainContext";

const CreateApartmentOfferPage = () => {

    const {getPost} = useContext(mainContext)

    return (
        <div className="d-flex j-center  wrap">
            <CreateApartmentOffer/>

        </div>
    );
};

export default CreateApartmentOfferPage;