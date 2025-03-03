import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard.jsx"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default App;
