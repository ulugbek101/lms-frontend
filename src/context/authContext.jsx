import { createContext, use, useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { baseURL } from "../utils/urls";

export const AuthContext = createContext({
    user: {
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        role: "",
        is_superuser: "",
        is_staff: "",
    },
    authTokens: {
        access: String,
        refresh: String,
    },
    loginUser: async (email, password) => {},
    logoutUser: () => {},
    setAuthTokens: () => {},
})


function AuthContextProvider({ children }) {
    const [user, setUser] = useState(() => localStorage.getItem("_lms_user") ? JSON.parse(localStorage.getItem("_lms_user")) : null);
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("_lms_authTokens") ? JSON.parse(localStorage.getItem("_lms_authTokens")) : null);
    const navigate = useNavigate();

    async function loginUser(email, password) {
        try {
            const response = await fetch(`${baseURL}/token/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                const authTokens = data;
                const decodedUser = jwtDecode(authTokens.access);

                setAuthTokens(authTokens);
                setUser(decodedUser);
                localStorage.setItem("_lms_authTokens", JSON.stringify(authTokens));
                localStorage.setItem("_lms_user", JSON.stringify(decodedUser));

                navigate("/");
                toast.success(`Assalomu alaykum, ${decodedUser.first_name} ${decodedUser.last_name} 👋`);
            } else {
                if (response.status === 401) {
                    toast.error("Akkaunt topilmadi");
                    console.log("Login error: Cccount was not found");
                }
                else {
                    toast.error(`Xatolik: ${data.detail || "Noma'lum xatolik"}`);
                    console.error("Login xatosi:", data);
                }
            }

        } catch (error) {
            if (error.response) {
                toast.error(`Xatolik yuz berdi, xatolik kodi ${error.response}: ${error}`)
                console.log("Error during login", error)
            }
            else {
                toast.error("Noma'lum xatolik yuz berdi, internetingiz yoniqligiga ishonch hosil qiling");
                console.log("Unknown error happened during login", error)
            }
        }
    };

    function logoutUser() {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("_lms_authTokens");
        navigate("/login");
        toast.warning("Tizimdan chiqdingiz, hayr 👋");
    };

    const value = {
        user,
        authTokens,
        setUser,
        loginUser,
        logoutUser,
        setAuthTokens,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
