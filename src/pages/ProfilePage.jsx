import { useContext, useState } from "react"
import Container from "../components/Container"
import { AuthContext } from "../context/authContext"

function ProfilePage() {
	const { user } = useContext(AuthContext);

	const [firstName, setFirstName] = useState(user.first_name);
	const [lastName, setLastName] = useState(user.last_name);
	const [middleName, setMiddleName] = useState(user.middle_name);
	const [email, setEmail] = useState(user.email);
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");

	async function handleUserDataUpdate(e) {
		e.preventDefault();
	}

	async function handleUserPasswordUpdate(e) {
		e.preventDefault();
	}

	return (
		<Container>
			<div className="flex flex-row justify-between gap-10">
				<div className="w-1/2 flex flex-col items-center">
					<img className="p-4 rounded-full w-50 h-50" src="https://res.cloudinary.com/dhtrn05k4/image/upload/v1/shams-media/profile-pictures/user-default.png" alt={`${user.first_name} ${user.last_name}`} />
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
							<span className="material-icons rounded-full p-1" style={{fontSize: "32px"}}>person</span>
							Shaxsiy ma'lumotlar
						</h2>
						<form onSubmit={handleUserDataUpdate} className="flex flex-col gap-2 w-full">
							<input className="outline-none border dark:border-white border-black rounded py-2 px-4" type="text" placeholder="Ism" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
							<input className="outline-none border dark:border-white border-black rounded py-2 px-4" type="text" placeholder="Familiya" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
							<input className="outline-none border dark:border-white border-black rounded py-2 px-4" type="text" placeholder="Sharifi" value={middleName} onChange={(e) => setMiddleName(e.target.value)} required />
							<input className="outline-none border dark:border-white border-black rounded py-2 px-4" type="text" placeholder="E-mail manzil" value={email} onChange={(e) => setEmail(e.target.value)} required />
							<button type="submit" className="rounded-lg w-full text-center mt-2 py-2 bg-blue-600 hover:bg-blue-700 transition hover:cursor-pointer active:scale-95">Yangilash</button>
						</form>
					</div>
					<div className="w-full flex flex-col gap-4">
						<h2 className="text-start text-3xl dark:text-white flex items-center gap-2">
							<span className="material-icons rounded-full p-1" style={{fontSize: "28px"}}>lock</span>
							Parol
						</h2>
						<form onSubmit={handleUserPasswordUpdate} className="flex flex-col gap-2 w-full">
							<input className="outline-none border dark:border-white border-black rounded py-2 px-4" type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} placeholder="Yangi parol" required />
							<input className="outline-none border dark:border-white border-black rounded py-2 px-4" type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Yangi parolni takrorlang" required />
							<button type="submit" className="rounded-lg w-full text-center mt-2 py-2 bg-blue-600 hover:bg-blue-700 transition hover:cursor-pointer active:scale-95">Yangilash</button>
						</form>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default ProfilePage;
