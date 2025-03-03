import { useContext } from "react";
import { UtilsContext } from "../context/utilsContext";
import { Link, NavLink } from "react-router-dom"

function Navbar() {
	const { sidebarOpened, setSidebarOpened } = useContext(UtilsContext);

	return (
		<aside
			id="logo-sidebar"
			className={`${sidebarOpened ? 'sm:translate-x-0 w-64' : '-translate-x-16 w-32'} fixed top-0 left-0 z-40 h-screen pt-17 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
			aria-label="Sidebar"
		>
			<div className="relative w-full h-5 flex justify-end">
				<span onClick={() => setSidebarOpened(!sidebarOpened)} className={`${sidebarOpened ? 'right-3' : 'right-4 rotate-180'}  material-icons absolute transition select-none cursor-pointer active:scale-90 top-0 dark:text-white dark:bg-gray-800 rounded`}>
					menu_open
				</span>
			</div>

			<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
				<div className={`${!sidebarOpened && 'items-end'} flex flex-col space-y-2 font-medium h-full`}>
					<h4 className="h-6 pb-2 mb-2 mt-4 dark:text-white text-xs uppercase border-b border-b-white">
						{sidebarOpened && 'Asosiy menyu'}
					</h4>

					<NavLink
						to="/"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700'} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">dashboard</span>
						{sidebarOpened && <span className="ms-3 text-xs">Monitoring</span>}
					</NavLink>


					<NavLink
						to="/analytics"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">stacked_line_chart</span>
						{sidebarOpened && <span className="ms-3 text-xs">Analitika</span>}
					</NavLink>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">calendar_month</span>
						{sidebarOpened && <span className="ms-3 text-xs">Kalendar</span>}
					</NavLink>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">mail</span>
						{sidebarOpened && <span className="ms-3 text-xs">Xabarlar</span>}
					</NavLink>

					<h4 className="h-6 pb-2 mb-2 mt-4 dark:text-white text-xs uppercase border-b border-b-white">
						{sidebarOpened && 'Boshqaruv'}
					</h4>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">layers</span>
						{sidebarOpened && <span className="ms-3 text-xs">Fanlar</span>}
					</NavLink>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">groups</span>
						{sidebarOpened && <span className="ms-3 text-xs">Ustozlar</span>}
					</NavLink>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">cast_for_education</span>
						{sidebarOpened && <span className="ms-3 text-xs">Guruhlar</span>}
					</NavLink>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">attach_money</span>
						{sidebarOpened && <span className="ms-3 text-xs">Moliya</span>}
					</NavLink>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group`}
					>
						<span className="material-icons text-[6px]">request_quote</span>
						{sidebarOpened && <span className="ms-3 text-xs">Chiqimlar</span>}
					</NavLink>

					<NavLink
						to="/calendar"
						className={({ isActive }) => `${isActive && 'bg-gray-100 dark:bg-gray-700 '} flex transition active:scale-95 select-none items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-300 dark:hover:bg-gray-700 dark:active:bg-gray-600 group mt-auto`}
					>
						<span className="material-icons text-[6px]">settings</span>
						{sidebarOpened && <span className="ms-3 text-xs">Akkaunt & Sozlamalar</span>}
					</NavLink>

				</div>
			</div>
		</aside>
	);
}

export default Navbar;
