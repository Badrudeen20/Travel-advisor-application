import React from 'react'
import star from './images/star.png'
const PlaceDetail = ({ place,selected,refProp }) => {
  
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return (
        <>
        <div className="img">
           <img src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} /> 
        </div>
        <div className="detail">
            <h4>{place.name}</h4>
            <div className="rating">
                
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
            </div>
        </div>
        </>
    )
}

export default PlaceDetail
/*

<img src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} /> 
*/