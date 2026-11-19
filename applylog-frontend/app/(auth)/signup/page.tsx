"use client";

import { useState, SubmitEvent } from "react";
import {
	Mail,
	Lock,
	ArrowRight,
	UserRound,
	Eye,
	EyeClosed,
	CircleExclamationPoint,
} from "lucide-react";
import { signUpSchema } from "@/schemas/auth/signup.schema";
import { getFieldErrors } from "@/lib/validation";

export default function SignUp() {
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		useState<boolean>(false);
	const [csrfToken, setCsrfToken] = useState<string | null>(null);

	//* handle submited form
	function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		//* clear previous errors
		setErrors({});

		const formData = new FormData(e.currentTarget);

		//* sign up data validation and normalization
		const result = signUpSchema.safeParse({
			fullName: formData.get("fullName"),
			email: formData.get("email"),
			password: formData.get("password"),
			confirmPassword: formData.get("confirmPassword"),
		});

		//* check error from sign up data validation
		if (!result.success) {
			setErrors(getFieldErrors(result.error)); //! set error state
			return;
		}

		alert(
			"Full Name: " +
				result.data.fullName +
				" | Email: " +
				result.data.email +
				" | Password : " +
				result.data.password +
				" | Confirm Password: " +
				result.data.confirmPassword,
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
						aria-invalid={!!errors.fullName}
						aria-describedby={errors.fullName ? "fullName-error" : undefined}
					/>
					{errors.fullName && (
						<div
							id="fullName-error"
							className="flex items-center gap-2 mt-2 ms-1"
							role="alert"
						>
							<CircleExclamationPoint color="#ef5350" size={17} />
							<p className="text-sm text-(--custom-error) font-semibold">
								{errors.fullName}
							</p>
						</div>
					)}
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
						aria-invalid={!!errors.email}
						aria-describedby={errors.email ? "email-error" : undefined}
					/>
					{errors.email && (
						<div
							id="email-error"
							className="flex items-center gap-2 mt-2 ms-1"
							role="alert"
						>
							<CircleExclamationPoint color="#ef5350" size={17} />
							<p className="text-sm text-(--custom-error) font-semibold">
								{errors.email}
							</p>
						</div>
					)}
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
							className="border border-(--custom-border) bg-(--custom-surface) rounded-lg py-2 ps-5 pe-10 flex-1"
							aria-invalid={!!errors.password}
							aria-describedby={errors.password ? "password-error" : undefined}
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
					{errors.password && (
						<div
							id="password-error"
							className="flex items-center gap-2 mt-2 ms-1"
							role="alert"
						>
							<CircleExclamationPoint color="#ef5350" size={17} />
							<p className="text-sm text-(--custom-error) font-semibold">
								{errors.password}
							</p>
						</div>
					)}
				</div>
				<div className="flex flex-col flex-1 my-2">
					<div className="flex gap-2 items-center mb-1">
						<Lock color="#f99a1a" size={20} />
						<label
							htmlFor="confirmPassword"
							className="text-(--custom-foreground)"
						>
							Confirm Password
						</label>
					</div>
					<div className="relative flex flex-1">
						<input
							id="confirmPassword"
							name="confirmPassword"
							type={showConfirmPassword === true ? "text" : "password"}
							placeholder={
								showConfirmPassword === true
									? "Create secure password"
									: "••••••••••••••••••••••"
							}
							className="border border-(--custom-border) bg-(--custom-surface) rounded-lg py-2 px-5 pe-10 flex-1"
							aria-invalid={!!errors.confirmPassword}
							aria-describedby={
								errors.confirmPassword ? "confirmPassword-error" : undefined
							}
						/>
						<button
							type="button"
							className="absolute z-10 right-3 bottom-3 cursor-pointer"
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						>
							{showConfirmPassword === true ? (
								<Eye color="#f99a1a" size={20} />
							) : (
								<EyeClosed color="#f99a1a" size={20} />
							)}
						</button>
					</div>
					{errors.confirmPassword && (
						<div
							id="confirmPassword-error"
							className="flex items-center gap-2 mt-2 ms-1"
							role="alert"
						>
							<CircleExclamationPoint color="#ef5350" size={17} />
							<p className="text-sm text-(--custom-error) font-semibold">
								{errors.confirmPassword}
							</p>
						</div>
					)}
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
