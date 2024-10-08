import axiosInstance from './axios.customize'; // Đảm bảo đường dẫn đúng



const createUserApi = (name: string, email: string, password: string) => {
    const URL_API = "/v1/api/register";
    const data = { name, email, password };
    return axiosInstance.post(URL_API, data);
};

const loginApi = (email: string, password: string) => {
    const URL_API = "/v1/api/login";
    const data = { email, password };
    return axiosInstance.post(URL_API, data);
};

const getUserApi = () => {
    const URL_API = "/v1/api/user";
    return axiosInstance.get(URL_API);
};



export {
    createUserApi,
    loginApi,
    getUserApi,
};
