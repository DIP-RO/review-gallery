import React from 'react';


const Reviewcard = ({service}) => {

    const {rating,details,name,img} = service;
 
    
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
    
  <div className="card-body">
    <div>
    <h2 className="card-title flex"> </h2>
    <p>name :{name}</p>
    <p>services :{details}</p>
    <p>rating :{rating}</p>
    </div>
    <div>
      <img src={img} alt=''/>
    </div>
  </div>
        </div>
    );
};

export default Reviewcard;