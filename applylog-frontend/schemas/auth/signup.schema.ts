import z from "zod";

export const signUpSchema = z
	.object({
		fullName: z
			.string()
			.trim()
			.min(1, "Full Name is required")
			.max(50, "Name is too long"),

		email: z
			.string() // turning into string
			.trim() // trim space
			.min(1, "Email is required")
			.email("Invalid email address")
			.toLowerCase(),

		password: z
			.string()
			.trim()
			.min(6, "Minimum 6 character")
			.max(30, "Password is too long"),

		confirmPassword: z
			.string()
			.trim()
			.min(6, "Minimum 6 character")
			.max(30, "Password is too long"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Password do not match",
		path: ["confirmPassword"],
	});

export type SignUpInput = z.infer<typeof signUpSchema>;
