import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import DashboardLayout from './pages/DashboardLayout';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/Profile';

// Cấu hình Router theo yêu cầu PDF
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />, // Trang Login ở root 
    },
    {
        // Route cha cho Dashboard
        path: "/dashboard",
        // Bọc bởi ProtectedRoute để bảo vệ [cite: 186]
        element: <ProtectedRoute />,
        children: [
            {
                element: <DashboardLayout />,
                children: [
                    { index: true, element: <PostList /> }, // Mặc định hiện danh sách
                    { path: "post/:postId", element: <PostDetail /> } ,
                    { path: "profile", element: <Profile /> }// Dynamic route [cite: 196]
                ]
            }
        ]
    }
]);

function App() {
    return (
        // Bọc toàn bộ App trong AuthProvider [cite: 174]
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;