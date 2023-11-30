import { type RequestEvent, error } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export async function POST({ params }: RequestEvent) {
	try {
		const id = params.todoId;

		if (!id) {
			return new Response(JSON.stringify({ message: 'No id' }), {
				status: 400
			});
		}

		await prisma.todo.update({
			where: {
				id: +id
			},
			data: { isCompleted: true }
		});

		return new Response(JSON.stringify({ message: 'Todo completed successfully' }), {
			status: 200
		});
	} catch (e) {
		return error(500);
	}
}
