import { useContext } from "react";
import { UtilsContext } from "../context/utilsContext";

function Container({ children }) {
	const { sidebarOpened } = useContext(UtilsContext);

	return (
		<div className={`${sidebarOpened ? "sm:ml-64" : "ml-16"}`}>
			<div className="p-4 rounded-lg mt-14">
				{children}
			</div>
		</div>
	);
}

export default Container;
