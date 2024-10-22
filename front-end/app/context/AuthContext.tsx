'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/auth.service';

interface User {
    id: string;
    name: string;
    email?: string;
    avatar?: string; 
    phone?: string[]; 
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const storedUser = localStorage.getItem('user');
            
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                try {
                    const profile = await getProfile();
                    setUser(profile); 
                    localStorage.setItem('user', JSON.stringify(profile)); 
                } catch (error) {
                    console.error('Error fetching user profile:', error);
                
                }
            }
        };
    
        fetchUserProfile();
    }, []);
    

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); 
    };
    

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); 
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
