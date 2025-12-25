import { createContext, useState, useContext } from 'react';

// 1. Khởi tạo Context
const AuthContext = createContext(null);

// 2. Tạo Provider
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (callback) => {
        setIsAuthenticated(true);
        if (callback) callback();
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Custom Hook để các trang khác gọi dùng
export const useAuth = () => useContext(AuthContext);