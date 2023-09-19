import axios from "axios";

const AuthService = {
    register: async (name, email, password) => {
        try {
            const response = await axios.post("http://localhost:8000/api/organization/register", {
                name: name,
                email: email,
                password: password,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    login: async (email, password) => {
        try {
            const response = await axios.post("http://localhost:8000/api/organization/login", {
                email,
                password,
            });
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem("user");
    },

    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem("user"));
    }
};

export default AuthService;
