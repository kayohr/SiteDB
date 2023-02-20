// import { Text, View } from 'react-native'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import React, { useContext } from 'react';
import LoginContext from '../context/LoginContext';



export default function Login() {
  // const { themeColor, setThemeColor } = useContext(loginContext);
const { xablau, setXablau } = useContext(LoginContext)
  // const [themeColor, setThemeColor] = useState('dark');
  // const formData = useSelector(state => state.email);
    // const dispatch = useDispatch();

    // const handleChange = event => {
    //   setFormData(event.target.value);
    // };
    
    // const handleSubmit = event => {
    //   event.preventDefault();
    //   dispatch(submitForm());
    // };
    
    
    

  return (
    <form >
     <input
            className="fonte"
            placeholder="Digite o seu email aqui"
            data-testid="email-input"
            name="email"
            type="text"
            onChange={ () => {}}
            
          />

    {/* <input
      type="text"
      value={formData}
      onChange={handleChange}
    /> */}
    <button
    onClick={ () => xablau === 'dark'? setXablau('light') : setXablau('dark')}
    type="button">Submit</button>
     
  </form>
);
};
