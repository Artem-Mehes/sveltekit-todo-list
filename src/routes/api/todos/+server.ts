import type { RequestEvent } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function GET({ locals }: RequestEvent) {
	const session = await locals.getSession();

	const userId = session?.user.id;

	if (userId) {
		const data = await prisma.todo.findMany({
			orderBy: {
				createdAt: 'desc'
			},
			where: {
				userId
			}
		});

		return new Response(JSON.stringify(data), { status: 200 });
	}
}
