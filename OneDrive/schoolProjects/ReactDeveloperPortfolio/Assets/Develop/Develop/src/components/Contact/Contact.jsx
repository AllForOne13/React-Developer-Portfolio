import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState
  ({ name: '', 
    email: '', 
    message: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleBlur = (e) => { 
    const { name, value } = e.target; 
    let errorMsg = ''; 
    if (!value) 
      { errorMsg = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`; 
  }
   setErrors({ 
    ...errors, 
    [name]:errorMsg 
  }); 
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form ( send data to a server)
    console.log(formState);
  };

  return ( <div className="contact"> <h2>Contact Me</h2> 
  <form onSubmit={handleSubmit}> 
    <div className="form-group"> 
      <label htmlFor="name">Name:</label>
       <input 
       type="text" 
       id="name" 
       name="name" 
       value={formState.name} 
       onChange={handleChange} 
       onBlur={handleBlur} 
       required />

        {errors.name && <p className="error">{errors.name}</p>} 
        </div>
         <div className="form-group">
           <label htmlFor="email">Email:</label>
            <input 
            type="email" 
            id="email" 
            name="email" 
            value={formState.email} 
            onChange={handleChange}
             onBlur={handleBlur} 
             required 
             />
              {errors.email && <p className="error">{errors.email}</p>} 
              </div>
               <div className="form-group"> 
                <label htmlFor="message">Message:</label>
                <textarea 
                id="message"
                 name="message" 
                value={formState.message} 
                onChange={handleChange} 
                onBlur={handleBlur}
                required 
                ></textarea> 
                {errors.message && <p className="error">{errors.message}</p>} 
                </div> 
              <button type="submit">Submit</button> 
                
            </form> 
        </div> 
                );
               };

                 export default Contact;