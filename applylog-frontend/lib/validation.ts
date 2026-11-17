import type { ZodError } from "zod";

export function getFieldErrors(error: ZodError) {
	const fieldErrors: Record<string, string> = {};

	for (const issue of error.issues) {
		const field = issue.path.join(".");

		if (field && !fieldErrors[field]) {
			fieldErrors[field] = issue.message;
		}
	}

	return fieldErrors;
}
