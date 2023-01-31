import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



export default function Login() {
    const [user, setUser] = useState('');
    const formData = useSelector(state => state.email);
    const dispatch = useDispatch();

    const handleChange = event => {
      setFormData(event.target.value);
    };
    
    const handleSubmit = event => {
      event.preventDefault();
      dispatch(submitForm());
    };

    
    

  return (
    <form onSubmit={handleSubmit}>
     <div>{formData}</div> 
    <input
    
    
      type="text"
      value={formData}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
);
};
