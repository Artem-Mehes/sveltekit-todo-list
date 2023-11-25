<script>
	import '@fontsource-variable/josefin-sans';
	import Header from '$lib/components/header.svelte';

	import { page } from '$app/stores';

	import '../app.css';
</script>

<svelte:head>
	<title>Todo list</title>
	<meta name="description" content="Svelte todo app" />
</svelte:head>

<Header session={$page.data.session} />
<main>Test</main>

<style>
	:global(body) {
		font-family: 'Josefin Sans Variable', sans-serif;
		font-size: 18px;
	}
</style>
