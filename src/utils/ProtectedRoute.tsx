import {useEffect, useState} from 'react';
import { Navigate, useLocation } from 'react-router';
import {useSelector} from "react-redux";
import {RootState} from "../store";


export type ProtectedRouteProps = {
    outlet: JSX.Element;
};

export default function ProtectedRoute({outlet}: ProtectedRouteProps) {
    const currentLocation = useLocation();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isLoggedIn);
    const [redirectPath,setRedirectPath] = useState('/dashboard')
    console.log('is',isAuthenticated,'curl',currentLocation);
    useEffect(() => {
        if (!isAuthenticated) {
            setRedirectPath("/")
        }
    }, [isAuthenticated, setRedirectPath, currentLocation]);

    if(isAuthenticated && redirectPath === currentLocation.pathname) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: isAuthenticated ? redirectPath : "/" }} />;
    }

};
