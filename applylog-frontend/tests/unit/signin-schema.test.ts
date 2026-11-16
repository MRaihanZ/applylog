import { describe, expect, it } from "vitest";

import { signInSchema } from "@/schemas/auth/signin.schema";

describe("signInSchema", () => {
	it("should accept valid sign in data", () => {
		const result = signInSchema.safeParse({
			email: "example@domail.com",
			password: "password123",
		});
		expect(result.success).toBe(true);
	});

	// Email test
	it("should trim whitespace from email", () => {
		const result = signInSchema.safeParse({
			email: "example@domail.com ",
			password: "password123",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.email).toBe("example@domail.com");
		}
	});

	it("should reject empty email", () => {
		const result = signInSchema.safeParse({
			email: "",
			password: "password123",
		});
		expect(result.success).toBe(false);
	});

	it("should reject invalid email", () => {
		const result = signInSchema.safeParse({
			email: "example",
			password: "password123",
		});
		expect(result.success).toBe(false);
	});

	it("should use lowercase email address", () => {
		const result = signInSchema.safeParse({
			email: "Example@Domail.Com",
			password: "password123",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.email).toBe("example@domail.com");
		}
	});

	// Password test
	it("should trim whitespace from password", () => {
		const result = signInSchema.safeParse({
			email: "example@domail.com",
			password: "password123 ",
		});
		expect(result.success).toBe(true);

		if (result.success) {
			expect(result.data.password).toBe("password123");
		}
	});

	it("shoud reject password less than 6 character", () => {
		const result = signInSchema.safeParse({
			email: "example@domain.com",
			password: "12345",
		});
		expect(result.success).toBe(false);
	});

	it("should reject password more than 30 character", () => {
		const result = signInSchema.safeParse({
			email: "example@domain.com",
			password: "a".repeat(33),
		});
		expect(result.success).toBe(false);
	});
});
