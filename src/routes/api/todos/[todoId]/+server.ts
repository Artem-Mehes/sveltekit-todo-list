import type { RequestEvent } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

export async function DELETE({ params }: RequestEvent) {
	try {
		const id = params.todoId;

		await prisma.todo.delete({
			where: { id: Number(id) }
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
