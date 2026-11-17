import z from "zod";
import { noControlAsciiCharacter } from "../security.schema";

export const signInSchema = z.object({
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
		.refine(noControlAsciiCharacter, "Control ASCII character are not allowed"),
});

export type SignInInput = z.infer<typeof signInSchema>;
