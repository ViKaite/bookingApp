import React from 'react';
import Photo from "./photo";

const PhotoBox = ({photos, setPhotos}) => {
    return (
        <div className="pictureBox">
            {photos.map((x, i) => <Photo setPhotos={setPhotos} photo={x} key={i} />)}
        </div>
    );
};

export default PhotoBox;