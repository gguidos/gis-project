import * as z from 'zod'

export default z.object({
	fullname: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters',
		})
		.max(50, {
			message: 'Username cannot be longer than 50 characters',
		}),
	personalNr: z
		.string()
		.min(2, {
			message: 'Password must be at least 2 characters',
		})
		.max(50, {
			message: 'Password cannot be longer than 50 characters',
		}),
    email: z
		.string()
		.min(2, {
			message: 'Email must be at least 2 characters',
		})
		.max(50, {
			message: 'Email cannot be longer than 50 characters',
		}),
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