import * as z from 'zod'

export default z.object({
	country: z
		.string()
		.min(2, {
			message: 'Organisation must be at least 2 characters',
		})
		.max(50, {
			message: 'Organisation cannot be longer than 50 characters',
		}),
	address: z
		.string()
		.min(2, {
			message: 'Organisation must be at least 2 characters',
		})
		.max(50, {
			message: 'Organisation cannot be longer than 50 characters',
		}),
	postNo: z
		.string()
		.min(2, {
			message: 'Organisation must be at least 2 characters',
		})
		.max(50, {
			message: 'Organisation cannot be longer than 50 characters',
		}),
	coordinates: z
		.string()
		.min(2, {
			message: 'Organisation must be at least 2 characters',
		})
		.max(50, {
			message: 'Organisation cannot be longer than 50 characters',
		})
})