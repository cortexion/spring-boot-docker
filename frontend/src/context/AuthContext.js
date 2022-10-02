import React, { useCallback } from 'react'
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    movies: [],
    fetchMovies: () => { },
});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = useCallback(async () => {
        try {
            const response = await fetch(`/api/clients/`, {
                method: 'GET',
            });
            const moviesJson = await response.json();
            console.log(moviesJson);
            setMovies(moviesJson);
        } catch (e) {
            console.log('fetchChartData error: ', e);
            throw new Error((e).message);
        } finally {

        }
    }, []);

    useEffect(() => {
        (async () => {
            if (movies.length < 1) {
                fetchMovies();
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ movies, fetchMovies }}>
            {children}
        </AuthContext.Provider>
    );
};