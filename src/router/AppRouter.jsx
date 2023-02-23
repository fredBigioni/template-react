import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { PublicRoutes, PrivateRoutes, AppRoutes } from '../app';
import Login from '../auth/pages/Login';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={
                    <PublicRoutes>
                        <LoginPage />
                        
                        {/* con tiempo ver este login y aplicarlo  */}
                        {/* <Login /> */}
                    </PublicRoutes>
                } />

                <Route path='/*' element={
                    <PrivateRoutes>
                        <AppRoutes />
                    </PrivateRoutes>
                } />
            </Routes>
        </>
    )
}
