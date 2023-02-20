import React, { useMemo, useState } from 'react';
import LoginContext from './LoginContext';

export default function LoginProvider({children}){
    // const [data, setData] = useState([ '']);
    const [xablau, setXablau] = useState('dark');
    

    // function toggleTheme() {
    //   setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
    // }
    
    const value = useMemo(() => ({
        xablau,
        setXablau
    }), [xablau, setXablau]) 
    
    return (
    <LoginContext.Provider value={ value }>
        <div className={ xablau }>
        {children}

        </div>
    </LoginContext.Provider>
)
}