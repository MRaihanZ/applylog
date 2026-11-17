import z from "zod";

import { noControlAsciiCharacter } from "../security.schema";

export const signUpSchema = z
	.object({
		fullName: z
			.string()
			.trim()
			.min(1, "Full Name is required")
			.max(50, "Name is too long")
			.refine(
				noControlAsciiCharacter,
				"Control ASCII character are not allowed",
			),

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
			.max(30, "Password is too long")
			.refine(
				noControlAsciiCharacter,
				"Control ASCII character are not allowed",
			),

		confirmPassword: z
			.string()
			.trim()
			.min(6, "Minimum 6 character")
			.max(30, "Password is too long")
			.refine(
				noControlAsciiCharacter,
				"Control ASCII character are not allowed",
			),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ["confirmPassword"],
		message: "Password do not match",
	});

export type SignUpInput = z.infer<typeof signUpSchema>;
