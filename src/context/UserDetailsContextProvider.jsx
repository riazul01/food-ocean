import React, { createContext } from 'react';

export const UserDetailsContext = createContext();

const UserDetailsContextProvider = ({ children }) => {
    return (
        <UserDetailsContext.Provider value={null}>
            {children}
        </UserDetailsContext.Provider>
    );
}

export default UserDetailsContextProvider;