'use client';

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(null);

    const contextLogin = (userId, token) => {
        setUserId(userId);
        setToken(token);
    };

    const logout = () => {
        setUserId(null);
        setToken(null);
    };

    const contextSignUp = (userId, token) => {
        setUserId(userId);
        setToken(token);
    };

    return (
        <AuthContext.Provider value={{ userId, token, contextLogin, logout, contextSignUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('Error is occurring');
    }
    return context;
};
