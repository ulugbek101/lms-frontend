import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import AuthContextProvider from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<App />
				<ToastContainer />
			</AuthContextProvider>
		</BrowserRouter>
	</StrictMode>
);
