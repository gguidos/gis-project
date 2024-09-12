import { cookies } from 'next/headers'


export default async function getCookie() {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
}