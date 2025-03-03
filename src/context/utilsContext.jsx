import { createContext, useState } from "react";

export const UtilsContext = createContext({
	sidebarOpened: true,
});

function UtilsContextProvider({ children }) {
	const [sidebarOpened, setSidebarOpened] = useState(true);

	const value = { sidebarOpened, setSidebarOpened };

	return (
		<UtilsContext.Provider value={value}>{children}</UtilsContext.Provider>
	);
}

export default UtilsContextProvider;
