import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    
    // Yêu cầu: Sử dụng useRef cho input username [cite: 204]
    const usernameRef = useRef(null);

    // Yêu cầu: Focus vào input khi mount [cite: 205]
    useEffect(() => {
        if(usernameRef.current) {
            usernameRef.current.focus();
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Giả lập login thành công, chuyển hướng sang dashboard [cite: 176]
        login(() => navigate('/dashboard'));
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome to BlogDash</h2>
                <p>Please sign in to continue</p>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            ref={usernameRef} 
                            placeholder="Enter username"
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="btn-primary">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;