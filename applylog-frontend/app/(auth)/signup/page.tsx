"use client";

import { useState, SubmitEvent } from "react";
import {
	Mail,
	Lock,
	ArrowRight,
	UserRound,
	Eye,
	EyeClosed,
} from "lucide-react";

export default function Page() {
	const [fullName, setFullName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [confirmShowPassword, setConfirmShowPassword] =
		useState<boolean>(false);
	function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		alert(
			"Full Name: " +
				fullName +
				" | Email: " +
				email +
				" | Password : " +
				password +
				" | Confirm Password: " +
				confirmPassword,
		);
	}
	return (
		<>
			<div className="mt-6 mb-3">
				<h2 className="bold text-2xl mb-1 text-(--custom-foreground)">
					Welcome
				</h2>
				<p className="text-(--custom-foreground-secondary)">
					Please fill these form to continue
				</p>
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col flex-1">
				<div className="flex flex-col flex-1 my-2">
					<div className="flex gap-2 items-center mb-1">
						<UserRound color="#f99a1a" size={20} />
						<label htmlFor="fullName" className="text-(--custom-foreground)">
							Full Name
						</label>
					</div>
					<input
						id="fullName"
						name="fullName"
						type="text"
						placeholder="Full Name"
						className="border border-(--custom-border) bg-(--custom-surface) rounded-lg py-2 px-5"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>
					<p className="mt-2 ms-1 text-sm text-(--custom-error) font-semibold">
						* Fill full name form
					</p>
				</div>
				<div className="flex flex-col flex-1 my-2">
					<div className="flex gap-2 items-center mb-1">
						<Mail color="#f99a1a" size={20} />
						<label htmlFor="email" className="text-(--custom-foreground)">
							Email
						</label>
					</div>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="example@domain.com"
						className="border border-(--custom-border) bg-(--custom-surface) rounded-lg py-2 px-5"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<p className="mt-2 ms-1 text-sm text-(--custom-error) font-semibold">
						* Fill email form
					</p>
				</div>
				<div className="flex flex-col flex-1 my-2">
					<div className="flex gap-2 items-center mb-1">
						<Lock color="#f99a1a" size={20} />
						<label htmlFor="password" className="text-(--custom-foreground)">
							Password
						</label>
					</div>
					<div className="relative flex flex-1">
						<input
							id="password"
							name="password"
							type={showPassword === true ? "text" : "password"}
							placeholder={
								showPassword === true
									? "Create secure password"
									: "••••••••••••••••••••••"
							}
							className="border border-(--custom-border) bg-(--custom-surface) rounded-lg py-2 ps-5 pe-10 flex-1 "
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							type="button"
							className="absolute z-10 right-3 bottom-3 cursor-pointer"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword === true ? (
								<Eye color="#f99a1a" size={20} />
							) : (
								<EyeClosed color="#f99a1a" size={20} />
							)}
						</button>
					</div>
					<p className="mt-2 ms-1 text-sm text-(--custom-error) font-semibold">
						* Fill password form
					</p>
				</div>
				<div className="flex flex-col flex-1 my-2">
					<div className="flex gap-2 items-center mb-1">
						<Lock color="#f99a1a" size={20} />
						<label htmlFor="password" className="text-(--custom-foreground)">
							Confirm Password
						</label>
					</div>
					<div className="relative flex flex-1">
						<input
							id="passwordConfirmation"
							name="passwordConfirmation"
							type={confirmShowPassword === true ? "text" : "password"}
							placeholder={
								confirmShowPassword === true
									? "Create secure password"
									: "••••••••••••••••••••••"
							}
							className="border border-(--custom-border) bg-(--custom-surface) rounded-lg py-2 px-5 pe-10 flex-1"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<button
							type="button"
							className="absolute z-10 right-3 bottom-3 cursor-pointer"
							onClick={() => setConfirmShowPassword(!confirmShowPassword)}
						>
							{confirmShowPassword === true ? (
								<Eye color="#f99a1a" size={20} />
							) : (
								<EyeClosed color="#f99a1a" size={20} />
							)}
						</button>
					</div>
					<p className="mt-2 ms-1 text-sm text-(--custom-error) font-semibold">
						* Password is different
					</p>
				</div>
				<div className="flex justify-center items-center flex-1 w-full mt-7 mb-3">
					<button
						type="submit"
						className="flex flex-1 justify-center items-center gap-2 border border-(--custom-border) w-full py-2 rounded-xl bg-linear-to-r from-(--custom-yellow-gradient) hover:from-(--custom-yellow-gradient)/80 to-(--custom-orange-gradient) hover:to-(--custom-orange-gradient)/80 cursor-pointer"
					>
						Sign Up
						<ArrowRight color="#f5f5f5" size={20} />
					</button>
				</div>
			</form>
		</>
	);
}
