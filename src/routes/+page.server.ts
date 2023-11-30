import prisma from '$lib/prisma';

import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.getSession();

	const response = await event.fetch('/api/todos', {
		method: 'GET'
	});
	const todos = await response.json();

	return {
		session,
		todos
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
