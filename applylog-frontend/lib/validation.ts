import type { ZodError } from "zod";

export function getFieldErrors(error: ZodError) {
	const fieldErrors: Record<string, string> = {};

	//* get issues from zod error
	for (const issue of error.issues) {
		//* join each array value and seperate with "." or dot if more than one array value
		const field = issue.path.join(".");

		//* check same error value
		if (field && !fieldErrors[field]) {
			fieldErrors[field] = issue.message;
		}
	}

	return fieldErrors;
}
