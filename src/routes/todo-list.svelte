<script lang="ts">
	import type { Todo } from '@prisma/client';
	import { invalidateAll } from '$app/navigation';

	export let data: Todo[];

	async function deleteTodo(id: number) {
		await fetch('/', {
			method: 'DELETE',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		await invalidateAll();
	}
</script>

<ul class="flex flex-col gap-5">
	{#each data as todo (todo.id)}
		<li>
			{todo.text}
			<button class="text-red-500" on:click={() => deleteTodo(todo.id)}>Delete</button>
		</li>
	{/each}
	<li />
</ul>
