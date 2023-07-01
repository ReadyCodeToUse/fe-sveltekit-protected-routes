import { fail, redirect } from '@sveltejs/kit'
/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request, url }) => {
        const data = await request.formData();
        const email = data.get('email');

        if (!email) {
            return fail(400, { email, missing: true });
        }

        const password = data.get('password');

        if (!password) {
            return fail(400, { email, incorrect: true });
        }

        console.log(email.toString())

        const user = email.toString()
        cookies.set('isauth', 'true')

        const authorized = email === 'demo@mail.com' ? false : true;

        // This logic is just as placeholder to understand how everything works...

        const redirectTo = url.searchParams.get('redirectTo') ?? '/home'

        throw redirect(302, redirectTo)

        // Because we want to redirect on home by default we will comment the below line...
        // return { success: true, authorized: authorized}
    },
    logout: async ({cookies}) => {
        cookies.delete('isauth')
        throw redirect(302, '/')
    }
}