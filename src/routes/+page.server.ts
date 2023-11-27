import prisma from '$lib/prisma';

import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async (event) => {
	return {
		session: await event.locals.getSession()
	};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const session = await locals.getSession();
		const user = session?.user;

		if (!user) {
			return;
		}

		const data = await request.formData();
		let text = data.get('text');

		if (typeof text !== 'string') {
			text = String(text);
		}

		await prisma.todo.create({
			data: {
				text,
				userId: user.id
			}
		});
	}
};
