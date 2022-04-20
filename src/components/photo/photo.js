import React from 'react';
import http from "../../plugins/http";

const Photo = ({photo, setPhotos}) => {

    function deletePhoto() {
        const photoDelete = {
            id: photo.id
        }

        http.post("/delete-photo",photoDelete ).then(data => {
            setPhotos(data)
        })
    }

    return (
        <div className="d-flex column">
            <img className="img2" src={photo.photo} alt=""/>
            <button className="btn1" onClick={deletePhoto}>Delete</button>
        </div>
    );
};

export default Photo;