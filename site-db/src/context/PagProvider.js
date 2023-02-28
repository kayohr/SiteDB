import PagContext from "./PagContext";
import React, { useMemo } from 'react';

export default function PagProvider({children}) {
    const value = useMemo(() => ({
        user: {
            name: 'João',
            email: 'joao@example.com',
            isLoggedIn: true
        }
    }), []) 
    return (
        <PagContext.Provider value={ value }>
            {children}
        </PagContext.Provider>
    )
}
