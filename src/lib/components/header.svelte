<script lang="ts">
	import type { Session } from '@auth/core/types';
	import { signOut, signIn } from '@auth/sveltekit/client';

	export let session: Session | null;
</script>

<header class="p-5 flex justify-end bg-white">
	{#if session}
		<button on:click={() => signOut()}>Sign Out</button>
	{:else}
		<button on:click={() => signIn('google')}>Sign In</button>
	{/if}
</header>
