import React from 'react';


const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3 className="title">{props.photo.title}</h3>
            <p className="date">{props.photo.date}</p>
            <img src={props.photo.hdurl}></img>
            <p className="explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;