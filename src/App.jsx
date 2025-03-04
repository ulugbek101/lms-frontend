import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SubjectsPage from "./pages/SubjectsPage"

function App() {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<ProfilePage />} />
				<Route path="/subjects" element={<SubjectsPage />} />
			</Route>
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default App;
