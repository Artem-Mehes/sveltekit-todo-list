<script lang="ts">
	import type { Session } from '@auth/core/types';
	import { signOut, signIn } from '@auth/sveltekit/client';

	export let session: Session | null;
</script>

<header class="p-5 flex justify-end">
	<!--{#if session}-->
	<!--	<button on:click={() => signOut()}>Sign Out</button>-->
	<!--{:else}-->
	<!--	<button on:click={() => signIn('google')}>Sign In</button>-->
	<!--{/if}-->
	<div class="flex justify-between w-full">
		<h1 class="font-bold text-5xl tracking-[15px]">TODO</h1>

		<button>Toggle theme</button>
	</div>
</header>
