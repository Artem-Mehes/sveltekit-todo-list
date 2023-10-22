<script>
	import '@fontsource-variable/josefin-sans';
	import { signIn, signOut } from '@auth/sveltekit/client';

	import { page } from '$app/stores';

	import '../app.css';
</script>

<svelte:head>
	<title>Todo list</title>
	<meta name="description" content="Svelte todo app" />
</svelte:head>

<section>
	{#if $page.data.session}
		<button on:click={() => signOut()}>Sign Out</button>
	{:else}
		<button on:click={() => signIn('google')}>Sign In</button>
	{/if}
	Test
</section>

<style>
	:global(body) {
		font-family: 'Josefin Sans Variable', sans-serif;
		font-size: 18px;
	}
</style>
