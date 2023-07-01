import { redirect } from '@sveltejs/kit'

/** @type {string[]} */
const PROTECTED_ROUTES = [
    "/home"
]

/** @type {import('@sveltejs/kit').Handle} */
export const handle = (async ({ event, resolve }) => {
    const isAuth = event.cookies.get('isauth')

    if (PROTECTED_ROUTES.includes(event.url.pathname) && (isAuth === undefined || isAuth === 'false')) {
        throw redirect(302, '/login')
    }
    return await resolve(event)
})