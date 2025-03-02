import { forwardRef } from "react";

const Input = forwardRef(
	(
		{
			id,
			label,
			value,
			onChange,
            minLength = 0,
            maxLength = 255,
            required = true,
			type = "text",
			icon = "",
			handleIconPress = () => {},
		},
		ref
	) => {
		return (
			<div className="relative">
				<input
					ref={ref}
					type={type}
					id={id}
					value={value}
					onChange={onChange}
					className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
                    required={required}
                    minLength={minLength}
                    maxLength={maxLength}
				/>
				{icon && (
					<span onClick={handleIconPress} className="material-icons absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-500 transition hover:cursor-pointer active:scale-90 select-none text-xs">
						{icon}
					</span>
				)}
				<label
					htmlFor={id}
					className="hover:cursor-text absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
				>
					{label}
				</label>
			</div>
		);
	}
);

export default Input;
