import { createContext, useState, useContext } from 'react';

[cite_start]// 1. Tạo Context [cite: 173]
const AuthContext = createContext(null);

[cite_start]// 2. Tạo Provider [cite: 174]
export const AuthProvider = ({ children }) => {
    [cite_start]// Trạng thái đăng nhập (mặc định là false) [cite: 173]
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    [cite_start]// Hàm login [cite: 173]
    const login = (callback) => {
        setIsAuthenticated(true);
        [cite_start]// Gọi callback (thường là chuyển trang) sau khi login xong [cite: 176]
        if (callback) callback(); 
    };

    // Hàm logout (bổ sung để test)
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Custom Hook để dùng Context nhanh gọn
export const useAuth = () => useContext(AuthContext);