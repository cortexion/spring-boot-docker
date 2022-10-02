import React from 'react'
import { Navigate, useOutlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import TopBar from "./TopBar";

export const HomeLayout = () => {
    const outlet = useOutlet();

    return (
        <div>
            <TopBar />
            {outlet}
        </div>
    );
};