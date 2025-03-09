import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Container from "../components/Container";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { AuthContext } from "../context/authContext";
import useAxios from "../hooks/useAxios";

function ProfilePage() {
	const { user, setUser } = useContext(AuthContext);

	const axiosInstance = useAxios();
	const [userDataIsLoading, setUserDataIsLoading] = useState(false);
	const [userPasswordIsLoading, setUserPasswordIsLoading] = useState(false);

	const [firstName, setFirstName] = useState(user.first_name);
	const [lastName, setLastName] = useState(user.last_name);
	const [middleName, setMiddleName] = useState(user.middle_name);
	const [email, setEmail] = useState(user.email);
	const [userDataIsValid, setUserDataIsValid] = useState(true);
	const [userPasswordIsValid, setUserPasswordIsValid] = useState(false);
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");

	useEffect(() => {
		setUserDataIsValid(
			firstName.trim().length > 0 &&
				lastName.trim().length > 0 &&
				middleName.trim().length > 0 &&
				/^[\w.-]+@[\w.-]+\.(com|ru|uz)$/.test(email)
		);
	}, [firstName, lastName, middleName, email]);

	useEffect(() => {
		setUserPasswordIsValid(
			password1 === password2 &&
			password2.trim().length >= 8
		)
	}, [password1, password2])

	async function handleUserDataUpdate(e) {
		e.preventDefault();

		if (!userDataIsValid) return;

		setUserDataIsLoading(true);
		try {
			const response = await axiosInstance.patch(
				`/api/v1/${user.role.toLowerCase()}s/${user.id}/`,
				JSON.stringify({
					first_name: firstName,
					last_name: lastName,
					middle_name: middleName,
					email: email,
				}),
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			const updatedUser = {...user, ...response.data}
			setUser(updatedUser);
			localStorage.setItem("_lms_user", JSON.stringify(updatedUser));
			toast.success("Shaxiy ma'lumotlar muvaffaqiyatli yangilandi");
		} catch (error) {
			toast.error(
				error.response?.data?.message ||
					"Ma'lumotlarni yangilashda xatolik yuz berdi"
			);
			console.error("Error while updating user profile:", error);
		} finally {
			setUserDataIsLoading(false);
		}
	}

	async function handleUserPasswordUpdate(e) {
		e.preventDefault();

		if (!userPasswordIsValid) return;

		setUserPasswordIsLoading(true);
		try {
			const response = await axiosInstance.patch(
				`/api/v1/${user.role.toLowerCase()}s/${user.id}/`,
				JSON.stringify({
					password: password2
				}),
				{
					headers: { "Content-Type": "application/json" },
				}
			);
			toast.success("Parol muvaffaqiyatli yangilandi");
		}
		catch (error) {
			toast.error(
				error.response?.data?.message ||
					"Parolni yangilashda xatolik yuz berdi"
			);
			console.error("Error while updating user password:", error);
		}
		finally {
			setUserPasswordIsLoading(false);
		}
	}

	return (
		<Container>
			<div className="flex flex-row justify-between gap-10">
				<div className="w-1/2 flex flex-col items-center">
					<img
						className="p-4 rounded-full w-50 h-50"
						src="https://res.cloudinary.com/dhtrn05k4/image/upload/v1/shams-media/profile-pictures/user-default.png"
						alt={`${user.first_name} ${user.last_name}`}
					/>
					<div className="w-full flex flex-col gap-2 mt-6">
						<h2 className="flex items-center gap-1 py-2 w-full justify-between border-b dark:border-b-white border-b-black">
							<span className="font-bold text-md">F.I.O: </span>
							{user.first_name} {user.last_name} {user.middle_name}
						</h2>
						<h2 className="flex items-center gap-1 py-2 w-full justify-between border-b dark:border-b-white border-b-black">
							<span className="font-bold text-md">E-mail manzil: </span>
							{user.email}
						</h2>
						<h2 className="flex items-center gap-1 py-2 w-full justify-between border-b dark:border-b-white border-b-black">
							<span className="font-bold text-md">Lavozim: </span>
							{user.role}
						</h2>
					</div>
				</div>
				<div className="w-1/2 flex flex-col gap-10">
					<div className="w-full flex flex-col gap-4">
						<h2 className="text-start text-3xl dark:text-white flex items-center gap-2">
							<span
								className="material-icons rounded-full p-1"
								style={{ fontSize: "32px" }}
							>
								person
							</span>
							Shaxsiy ma'lumotlar
						</h2>
						<form
							onSubmit={handleUserDataUpdate}
							className="flex flex-col gap-2 w-full"
						>
							<input
								className="outline-none border dark:border-white border-black rounded py-2 px-4"
								type="text"
								placeholder="Ism"
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
								required
							/>
							<input
								className="outline-none border dark:border-white border-black rounded py-2 px-4"
								type="text"
								placeholder="Familiya"
								value={lastName}
								onChange={e => setLastName(e.target.value)}
								required
							/>
							<input
								className="outline-none border dark:border-white border-black rounded py-2 px-4"
								type="text"
								placeholder="Sharifi"
								value={middleName}
								onChange={e => setMiddleName(e.target.value)}
								required
							/>
							<input
								className="outline-none border dark:border-white border-black rounded py-2 px-4"
								type="text"
								placeholder="E-mail manzil"
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
							/>
							<button
								disabled={!userDataIsValid}
								type="submit"
								className="rounded-lg w-full text-center mt-2 py-2 bg-blue-600 hover:bg-blue-700 transition hover:cursor-pointer active:scale-95 disabled:border-gray-600 disabled:text-white disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:active:scale-100 disabled:cursor-not-allowed"
							>
								{userDataIsLoading ? <LoadingSpinner /> : "Yangilash"}
							</button>
						</form>
					</div>
					<div className="w-full flex flex-col gap-4">
						<h2 className="text-start text-3xl dark:text-white flex items-center gap-2">
							<span
								className="material-icons rounded-full p-1"
								style={{ fontSize: "28px" }}
							>
								lock
							</span>
							Parol
						</h2>
						<form
							onSubmit={handleUserPasswordUpdate}
							className="flex flex-col gap-2 w-full"
						>
							<input
								className="outline-none border dark:border-white border-black rounded py-2 px-4"
								type="password"
								value={password1}
								onChange={e => setPassword1(e.target.value)}
								placeholder="Yangi parol"
								required
							/>
							<input
								className="outline-none border dark:border-white border-black rounded py-2 px-4"
								type="password"
								value={password2}
								onChange={e => setPassword2(e.target.value)}
								placeholder="Yangi parolni takrorlang"
								required
							/>
							<button
								disabled={!userPasswordIsValid}
								type="submit"
								className="rounded-lg w-full text-center mt-2 py-2 bg-blue-600 hover:bg-blue-700 transition hover:cursor-pointer active:scale-95 disabled:border-gray-600 disabled:text-white disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:active:scale-100 disabled:cursor-not-allowed"
							>
								{userPasswordIsLoading ? <LoadingSpinner /> : "Yangilash"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default ProfilePage;
