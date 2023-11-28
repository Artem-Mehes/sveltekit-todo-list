import type { RequestEvent } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

export async function DELETE({ request }: RequestEvent) {
	try {
		const params = await request.json();

		await prisma.todo.delete({
			where: params
		});

		return new Response(JSON.stringify({ message: 'Todo deleted successfully' }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		return error(500);
	}
}
