function TableContainer({ children }) {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[30rem] overflow-auto">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				{children}
			</table>
		</div>
	);
}

export default TableContainer;
