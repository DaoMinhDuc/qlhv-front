import React, { useContext, useState } from 'react';
import { UsergroupAddOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {

    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);

    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        ...(auth.isAuthenticated && auth.user?.role === 'admin' ? [{
            label: <Link to={"/user"}>Users</Link>,
            key: 'user',
            icon: <UsergroupAddOutlined />,
        }] : []),

        {
            label: `Welcome ${auth?.user?.name ?? ""}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                ...(auth.isAuthenticated ? [
                    ...(auth?.user?.role === "admin" ? [
                        {
                            label: <Link to="/admin">Quản trị viên</Link>,
                            key: 'admin',
                        },
                        {
                            label: <Link to="/teacher">Giáo viên</Link>,
                            key: 'teacher',
                        },
                        {
                            label: <Link to="/student">Học viên</Link>,
                            key: 'student',
                        },
                    ] : auth?.user?.role === "teacher" ? [
                        {
                            label: <Link to="/teacher">Giáo viên</Link>,
                            key: 'teacher',
                        },
                    ] : auth?.user?.role === "student" ? [
                        {
                            label: <Link to="/student">Học viên</Link>,
                            key: 'student',
                        },
                    ] : []),
                    {
                        label: <span onClick={() => {
                            localStorage.clear("access_token");
                            setCurrent("home");
                            setAuth({
                                isAuthenticated: false,
                                user: {
                                    email: "",
                                    name: "",
                                    role: ""
                                }
                            });
                            navigate("/");
                        }}>Đăng xuất</span>,
                        key: 'logout',
                    }
                ] : [
                    {
                        label: <Link to={"/login"}>Đăng nhập</Link>,
                        key: 'login',
                    }
                ]),
            ],
        }
        

    ];

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;

