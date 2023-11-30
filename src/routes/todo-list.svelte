<script lang="ts">
	import type { Todo } from '@prisma/client';
	import { invalidateAll } from '$app/navigation';

	export let data: Todo[];

	async function deleteTodo(id: Todo['id']) {
		await fetch(`/api/todos/${id}`, {
			method: 'DELETE'
		});

		await invalidateAll();
	}

	async function complete(id: Todo['id']) {
		await fetch(`api/todos/complete/${id}`, {
			method: 'POST'
		});
		await invalidateAll();
	}
</script>

<ul class="flex flex-col gap-5">
	{#each data as todo (todo.id)}
		<li>
			{todo.text}
			{#if todo.isCompleted}
				<span>Completed</span>
			{:else}
				<button class="text-green-600" on:click={() => complete(todo.id)}>Complete</button>
			{/if}
			<button class="text-red-500" on:click={() => deleteTodo(todo.id)}>Delete</button>
		</li>
	{/each}
</ul>
