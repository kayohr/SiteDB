// import { Text, View } from 'react-native'
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';


export default function Login() {
  // const { themeColor, setThemeColor } = useContext(loginContext);
  const { xablau, setXablau } = useContext(LoginContext)
  const history = useHistory();
  const [login, setLogin] = useState({login: ''});
  const [load, setLoad] = useState(false);
  const [disabled, setDisabled] = useState(true);


  // const formData = useSelector(state => state.email);
    // const dispatch = useDispatch();

    const handleChange = event => {
      setLogin(event.target.value);
    };
    
    // const handleSubmit = event => {
    //   event.preventDefault();
    //   dispatch(submitForm());
    // };
    useEffect(() =>{
      const LETTER = 2;
      if (login.login.length > LETTER) {
        setDisabled(true);
      }
      setDisabled(false);

    }, [login])
    // const fucMaior0 = () => {
    // };
    
    const validatonButton = () => {
      setLoad(login && history.push(`/galeria`))
      
      // history.push(`/drinks/`);

    }

  return (
    <form >
       { load ? (<p>Loading...</p>)
              : (
     <input
            className="fonte"
            placeholder="Digite o seu nome aqui"
            name="login"
            type="text"
            onChange={() => handleChange}
            // onChange={ ({ target }) => {
            //   setLogin(target.value);
            // } }
            
          />

               )} 
    <button 
    disabled= { disabled }
    onClick={()=> validatonButton}
    // onClick={ () => xablau === 'dark'? setXablau('light') : setXablau('dark')}
    type="button">Entrar</button>
       <button
    onClick={ () => xablau === 'dark'? setXablau('light') : setXablau('dark')}
    type="button">{xablau.color === 'dark' ? '☀️' : '🌒'}</button>
  
  </form>
);
};
