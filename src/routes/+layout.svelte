<script>
	import '@fontsource-variable/josefin-sans';

	import '../app.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	:global(body) {
		font-family: 'Josefin Sans Variable', sans-serif;
		font-size: 18px;
	}
</style>
