import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // Nếu chưa đăng nhập -> Đá về trang chủ (Login)
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Nếu đã đăng nhập -> Cho phép hiển thị nội dung con (Outlet)
    return <Outlet />;
};

export default ProtectedRoute;