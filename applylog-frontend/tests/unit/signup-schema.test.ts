import { describe, expect, it } from "vitest";

import { signUpSchema } from "@/schemas/auth/signup.schema";

describe("signUpSchema", () => {
	it("should accept valid sign in data", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(true);
	});

	// Full name test
	it("should trim whitespace from Full Name", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name ",
			email: "example@domail.com",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.fullName).toBe("Example Name");
		}
	});

	it("shoud reject empty full name", () => {
		const result = signUpSchema.safeParse({
			fullName: "",
			email: "example@domail.com",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(false);
	});

	it("should reject password more than 50 character", () => {
		const result = signUpSchema.safeParse({
			fullName: "a".repeat(53),
			email: "example@domain.com",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(false);
	});

	//Email test
	it("should trim whitespace from email", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com ",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.email).toBe("example@domail.com");
		}
	});

	it("should reject empty email", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(false);
	});

	it("should reject invalid email", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(false);
	});

	it("should use lowercase email address", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "Example@Domail.Com",
			password: "password123",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.email).toBe("example@domail.com");
		}
	});

	// Password test
	it("should trim whitespace from password", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com",
			password: "password123 ",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.password).toBe("password123");
		}
	});

	it("shoud reject password less than 6 character", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com",
			password: "12345",
			confirmPassword: "password123",
		});
		expect(result.success).toBe(false);
	});

	it("should reject password more than 30 character", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com",
			password: "a".repeat(33),
			confirmPassword: "password123",
		});
		expect(result.success).toBe(false);
	});

	// Confirm password test
	it("should trim whitespace from password", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com",
			password: "password123",
			confirmPassword: "password123 ",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.password).toBe("password123");
		}
	});

	it("shoud reject password less than 6 character", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com",
			password: "password123",
			confirmPassword: "12345",
		});
		expect(result.success).toBe(false);
	});

	it("should reject password more than 30 character", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domail.com",
			password: "password123",
			confirmPassword: "a".repeat(33),
		});
		expect(result.success).toBe(false);
	});

	it("should return the correct error message for password mismatch", () => {
		const result = signUpSchema.safeParse({
			fullName: "Example Name",
			email: "example@domain.com",
			password: "password123",
			confirmPassword: "password",
		});

		expect(result.success).toBe(false);

		if (!result.success) {
			expect(result.error.issues).toContainEqual(
				expect.objectContaining({
					path: ["confirmPassword"],
					message: "Password do not match",
				}),
			);
		}
	});
});
