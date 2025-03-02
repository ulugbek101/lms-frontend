import axios from "axios";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";

import { AuthContext } from "../context/authContext";
import { baseURL } from "../utils/urls";

function useAxios() {
	const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

	const axiosInstance = axios.create({
		baseURL,
		headers: { Authorization: `Bearer ${authTokens?.access}` },
	});

	axiosInstance.interceptors.request.use(async req => {
		if (!authTokens?.refresh) return req;

		const user = authTokens?.access ? jwtDecode(authTokens.access) : null;
		const isExpired = user?.exp
			? dayjs.unix(user.exp).isBefore(dayjs())
			: false;

		if (!isExpired) return req;

		try {
			const response = await axios.post(`${baseURL}/token/refresh/`, {
				refresh: authTokens.refresh,
			});

			const newAuthTokens = response.data;

			// Update localstorage and User
			localStorage.setItem("_lms_authTokens", JSON.stringify(newAuthTokens));
			setAuthTokens(newAuthTokens);
			setUser(jwtDecode(newAuthTokens.access));

			req.headers.Authorization = `Bearer ${newAuthTokens.access}`;
		} catch (error) {
			console.error("Token refresh failed:", error);

			// Agar refresh xatosi bo‘lsa, auth ma'lumotlarini tozalash
			setAuthTokens(null);
			setUser(null);
			localStorage.removeItem("authTokens");

			throw error;
		}

		return req;
	});

	return axiosInstance;
}

export default useAxios;
