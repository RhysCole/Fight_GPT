import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { type RootState } from '@/contexts/store';

const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.user);

    if (!isAuthenticated){
        return <Navigate to="/auth/login" replace />;
    }
    else {
        return <Outlet />;
    }
};

export default ProtectedRoute;