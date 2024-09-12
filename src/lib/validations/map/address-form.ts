import * as z from 'zod'

export default z.object({
	address: z
		.string()
		.min(2, {
			message: 'Address must be at least 2 characters',
		})
		.max(50, {
			message: 'Address cannot be longer than 50 characters',
		}),
})