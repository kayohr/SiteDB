import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/LoginContext';

export default function Login() {
  const { xablau } = useContext(LoginContext);
  const { toggleTheme } = useContext(LoginContext);

  const history = useHistory();
  const [login, setLogin] = useState({ value: '' });
  const [load, setLoad] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = event => {
    setLogin({ value: event.target.value });
  };
    
  useEffect(() => {
    const LETTER = 2;
    if (login.value.length <= LETTER) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [login]);
    
  const validationButton = () => {
    setLoad(true);
    if (login.value.length > 2) {
      history.push(`/galeria`);
    }
  };

  return (
    <form>
      
      {load ? (
        <p>Loading...</p>
      ) : (
        <input
          className="fonte"
          placeholder="Digite o seu nome aqui"
          name="login"
          type="text"
          onChange={handleChange}
          value={login.value}
        />
      )}
      <button
        disabled={disabled}
        onClick={validationButton}
        type="button"
      >
        Entrar
      </button>
      <button
  onClick={() => { setLoad(false); toggleTheme(); }}
  type="button"
>
  {xablau === 'dark' ? '🌞' : '🌒'}
</button>
    </form>
  );
};
