import { useAuth } from '../context/AuthContext';

const Profile = () => {
    // Lấy thông tin xác thực (ví dụ để hiển thị)
    const { isAuthenticated } = useAuth();

    return (
        <div className="profile-container" style={{background: 'white', padding: '2rem', borderRadius: '8px'}}>
            <h2>User Profile</h2>
            <div className="profile-info" style={{marginTop: '1rem'}}>
                <p><strong>Username:</strong> Admin User</p>
                <p><strong>Role:</strong> Administrator</p>
                <p><strong>Status:</strong> {isAuthenticated ? 'Active / Logged In' : 'Guest'}</p>
                <hr style={{margin: '20px 0', borderTop: '1px solid #eee'}}/>
                <button className="btn-primary" style={{width: 'auto'}}>Edit Profile</button>
            </div>
        </div>
    );
};

export default Profile;