import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const HomeServiceCard = ({Homeservice}) => {

    const {_id,picture,name,description} = Homeservice;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
        <PhotoProvider>
             <PhotoView src={picture} >
                        <img src={picture} alt='' />
                    </PhotoView>
                </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
          <Link to={`/services/${_id}`}><button className="btn btn-primary">details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default HomeServiceCard;