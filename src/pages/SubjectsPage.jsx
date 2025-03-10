import { useEffect, useState } from "react";
import Container from "../components/Container";
import TableContainer from "../components/TableContainer";
import useAxios from "../hooks/useAxios";
import Modal from "../components/Modal"

function SubjectsPage() {
	const axiosInstance = useAxios();
	const [subjects, setSubjects] = useState([]);
	const [subjectsAreLoading, setSubjectsAreLoading] = useState(false);
	const [createSubjectModalIsOpen, setCreateSubjectModalIsOpen] = useState(false);

	async function fetchSubjects() {
		setSubjectsAreLoading(true);
		try {
			const response = await axiosInstance.get("/api/v1/subjects/");
			setSubjects(response.data);
		} catch (error) {
			toast.error(
				error.response?.data?.message || "Fanlarni yuklashda xatolik yuz berdi"
			);
			console.error("Error while fetching subjects:", error);
		} finally {
			setSubjectsAreLoading(false);
		}
	}

	useEffect(() => {
		fetchSubjects();
	}, []);

	return (
		<Container extraClasses="flex flex-col gap-5">
			<div className="w-full flex flex-row justify-between">
				<button onClick={() => setCreateSubjectModalIsOpen(true)} className="px-4 py-2 rounded-lg text-center bg-blue-600 hover:bg-blue-700 transition hover:cursor-pointer active:scale-95 flex flex-row gap-1 items-center">
					<span className="material-icons">layers</span>
					Fan qo'shish
				</button>
				<div className="relative min-w-1/4">
					<input
						type="search"
						id="floating_outlined"
						className="block px-2.5 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
					/>
					<label
						htmlFor="floating_outlined"
						className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 hover:cursor-text"
					>
						Fan nomi bo'yicha qidirish
					</label>
				</div>
			</div>
			<TableContainer>
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr className="grid grid-cols-8">
						<th scope="col" className="px-6 py-3 col-span-1">
							№
						</th>
						<th scope="col" className="px-6 text-center py-3 col-span-2">
							Fan nomi
						</th>
						<th scope="col" className="px-6 text-center py-3 col-span-2">
							Guruhlar soni
						</th>
						<th scope="col" className="px-6 text-center py-3 col-span-2">
							Yaratilgan sana
						</th>
						<th scope="col" className="px-6 py-3 text-right col-span-1">
							<span className="sr-only">Edit</span>
							Tahrirlash/O'chirish
						</th>
					</tr>
				</thead>
			</TableContainer>
			<TableContainer>
				<tbody>
					{subjects.map((subject, index) => (
						<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 grid grid-cols-8">
							<th
								scope="row"
								className="flex items-center px-6 py-4 font-semibold col-span-1"
							>
								{index + 1}
							</th>
							<td className="flex items-center justify-center px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white col-span-2">
								{subject.name}
							</td>
							<td className="flex items-center justify-center px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white col-span-2">
								{subject.groups}
							</td>
							<td className="flex items-center justify-center px-6 py-4 font-semibold col-span-2">
								{new Date(subject.created).toLocaleDateString("en-GB", {
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit",
									hour12: false, // Set to true for 12-hour format
								})}
							</td>
							<td className="px-6 py-4 text-right flex flex-row justify-end items-center gap-5 col-span-1">
								<span className="material-icons p-2 transition hover:cursor-pointer hover:text-yellow-500 hover:scale-105 active:scale-95 select-none">edit_square</span>
								<span className="material-icons p-2 transition hover:cursor-pointer hover:text-red-500 hover:scale-105 active:scale-95 select-none">delete</span>
							</td>
						</tr>
					))}
				</tbody>
			</TableContainer>
			{createSubjectModalIsOpen && (
				<Modal onClose={setCreateSubjectModalIsOpen}>
					
				</Modal>
			)}
		</Container>
	);
}

export default SubjectsPage;
