<script>
	import '@fontsource-variable/josefin-sans';
	import Header from '$lib/components/header.svelte';
	import CreateTodo from './create-todo.svelte';
	import TodoList from './todo-list.svelte';

	import { page } from '$app/stores';

	import '../app.css';
</script>

<svelte:head>
	<title>Todo list</title>
	<meta name="description" content="Svelte todo app" />
</svelte:head>

<!--TODO: bg-light theme-->
<div class="bg-[url($lib/assets/images/bg-desktop-dark.jpg)] bg-no-repeat h-full bg-contain">
	<div class="max-w-3xl mx-auto pt-16 flex flex-col gap-6">
		<Header session={$page.data.session} />
		<main>
			<CreateTodo />

			<TodoList data={$page.data.todos} />
		</main>
	</div>
</div>

<style>
	:global(body) {
		font-family: 'Josefin Sans Variable', sans-serif;
		font-size: 18px;
	}
</style>
