import React, {  useState } from 'react';
import {  useHistory } from 'react-router-dom';

export default function Login() {

  const history = useHistory();
  const [login, setLogin] = useState({ value: '' });
 
  // const [sessionTimeout, setSessionTimeout] = useState(false);

  const validationButton = () => {
    if (login) {
      history.push(`/filter`);
    }
  };
  return (
    <>
    <div>
    <button
      onClick={validationButton}
      type="button"
    >
      Entrar
    </button>
    </div>
   
   </>
  );
}
