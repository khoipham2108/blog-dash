import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
    const { logout } = useAuth();

    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="logo">BlogDash</div>
                <nav>
                    <Link to="/dashboard" className="nav-item">All Posts</Link>
                    <Link to="/dashboard/profile" className="nav-item">My Profile</Link>
                </nav>
                <button onClick={logout} className="logout-btn">Logout</button>
            </aside>
            <main className="content-area">
                <header className="top-bar">
                    <h3>Dashboard Overview</h3>
                    <span className="user-badge">Admin User</span>
                </header>
                <div className="page-content">
                    <Outlet /> {/* Nơi hiển thị PostList hoặc PostDetail */}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;