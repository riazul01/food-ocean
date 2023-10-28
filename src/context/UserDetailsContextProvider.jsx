import React, { useState, useEffect, useContext, createContext } from 'react';
import { LoginContext } from './LoginContextProvider';

// firebase
import { doc, onSnapshot } from "firebase/firestore";
import { fs } from "../firebase";

export const UserDetailsContext = createContext();

const UserDetailsContextProvider = ({ children }) => {
    const { currentUser } = useContext(LoginContext);
    const [userDetails, setUserDetails] = useState(currentUser);

    useEffect(() => {
        // get user data from firestore
        const getUserData = async () => {
            if (currentUser) {
                onSnapshot(doc(fs, "users", currentUser.uid), (doc) => {
                    setUserDetails({...doc.data()});
                    localStorage.setItem('userDetails', JSON.stringify({...doc.data()}));
                });
            }    
        }
        getUserData();
    }, [currentUser]);

    return (
        <UserDetailsContext.Provider value={userDetails}>
            {children}
        </UserDetailsContext.Provider>
    );
}

export default UserDetailsContextProvider;