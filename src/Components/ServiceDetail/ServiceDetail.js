import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ServiceDetail = () => {

    const {name,picture,description,price,rating} = useLoaderData();

    const [review , setReview] = useState({rating:'default',name:name,details:'default',img:picture,});
    const handleAddReview = event =>{
    event.preventDefault();
    
    console.log(picture);
    fetch('https://server-67u3514i9-dip-ro.vercel.app/review', {
     method : 'POST',
     headers : {

        'content-type' : 'application/json'
     },
     body: JSON.stringify(review)
 })
 .then( res => res.json())
 .then(data => console.log(data))
    
 toast("Successfully added");
    }
   
    const handleInputBlur = event => {
       const value = event.target.value;
       const field = event.target.name;
       const newReview = {...review};
       newReview[field] = value;
       setReview(newReview);
    
   
    }
  
   

    return (
        <>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={picture} alt='' className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{price}</p>
            <p className="py-6">{rating}</p>
            <p className="py-6">{description}</p>
            
          </div>

        </div>
      </div>





      <div>
      <form onSubmit={handleAddReview}>

                <input className="mt-5 " onBlur={handleInputBlur} type='text' name='rating' placeholder='rating' required/>
                <br/>
                
                <input className="mt-5 " onBlur={handleInputBlur} type='text' name='details' placeholder='details' required/>
                <br/>
                

                 <div>
                 <button className="mt-5 btn" type='submit'>Submit </button>
                 <ToastContainer />
                 </div>

</form>


      </div>

      </>
    );
};

export default ServiceDetail;