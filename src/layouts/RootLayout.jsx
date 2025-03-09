import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/authContext";

function RootLayout() {
	const { user } = useContext(AuthContext);

	if (!user) {
		return <Navigate to="/login" replace />;
	}

	return (
		<>
			<Navbar />
			<Sidebar />
			<Outlet />
		</>
	);
}

export default RootLayout;
