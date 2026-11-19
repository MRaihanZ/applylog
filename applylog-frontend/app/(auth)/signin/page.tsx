"use client";

import { useState, SubmitEvent } from "react";

import {
	Mail,
	Lock,
	ArrowRight,
	Eye,
	EyeClosed,
	CircleExclamationPoint,
} from "lucide-react";
import { signInSchema } from "@/schemas/auth/signin.schema";
import { getFieldErrors } from "@/lib/validation";

export default function SignIn() {
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [csrfToken, setCsrfToken] = useState<string | null>(null);

	//* handle submited form
	function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		//* Clear previous errors
		setErrors({});

		const formData = new FormData(e.currentTarget);

		//* sign in data validation and normalization
		const result = signInSchema.safeParse({
			email: formData.get("email"),
			password: formData.get("password"),
		});

		//* check error from sign in data validation
		if (!result.success) {
			setErrors(getFieldErrors(result.error)); //! set error state
			console.log(result.error.issues[0].path);
			console.log(errors.password);
			return;
		}

		alert(
			"Email: " + result.data.email + " | Password : " + result.data.password,
		);
	}

	return (
		<>
			<div className="mt-6 mb-3">
				<h2 className="bold text-2xl mb-1 text-(--custom-foreground)">
					Welcome Back
				</h2>
				<p className="text-(--custom-foreground-secondary)">
					Sign in to your account to continue
				</p>
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col flex-1">
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
				<div className="flex justify-center items-center flex-1 w-full mt-7 mb-3">
					<button
						type="submit"
						className="flex flex-1 justify-center items-center gap-2 border border-(--custom-border) w-full py-2 rounded-xl bg-linear-to-r from-(--custom-yellow-gradient) hover:from-(--custom-yellow-gradient)/80 to-(--custom-orange-gradient) hover:to-(--custom-orange-gradient)/80 cursor-pointer"
					>
						Sign In
						<ArrowRight color="#f5f5f5" size={20} />
					</button>
				</div>
			</form>
		</>
	);
}
