'use server'

import { cookies } from 'next/headers'

export default async function deleteSessionCookies() {
    cookies().delete('token')
    cookies().delete('username')
    cookies().delete('email')
}