import { useEffect, useState, useContext } from "react";
import Input from "../components/UI/Input";
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom"

function LoginPage() {
    const { loginUser, user } = useContext(AuthContext)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
	const navigate = useNavigate();

	function handlePasswordVisibility(e) {
		if (e.target.innerHTML === "visibility") {
            e.target.innerHTML = "visibility_off";
            e.target.parentNode.querySelector("input").type = "text";
        }
        else {
            e.target.innerHTML = "visibility";
            e.target.parentNode.querySelector("input").type = "password";
        }
	}

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [])

    useEffect(() => {
        const emailRegex = /^[\w.-]+@[\w.-]+\.(com|ru|uz)$/;
        setFormIsValid(emailRegex.test(email) && password)
    }, [email, password])

    async function onFormSubmit(e) {
        e.preventDefault();
		setIsLoading(true);
        await loginUser(email, password);
		setIsLoading(false);
    }

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<a
					href="#"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<img
						className="w-8 h-8 mr-2"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
						alt="logo"
					/>
					Logo
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Tizimga kirish
						</h1>
						<form onSubmit={onFormSubmit} className="space-y-4 md:space-y-6" action="#">
							<Input
								id="email"
								label="E-mail manzil"
								value={email}
								onChange={e => setEmail(e.target.value)}
								type="email"
							/>

							<Input
								id="password"
								label="Parol"
								value={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								icon="visibility"
								handleIconPress={handlePasswordVisibility}
							/>

							<button
                                disabled={!formIsValid || isLoading}
								type="submit"
								className="border border-transparent hover:cursor-pointer transition active:scale-95 w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 disabled:border-gray-600 disabled:text-white disabled:bg-gray-600 disabled:hover:bg-gray-600 disabled:active:scale-100 disabled:cursor-not-allowed"
							>
                                {isLoading ? <LoadingSpinner /> : "Kirish"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LoginPage;
