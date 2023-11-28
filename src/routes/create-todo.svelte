<script>
	import { enhance } from '$app/forms';
</script>

<div>
	<form method="POST" use:enhance>
		<input class="text-gray-500" name="text" type="text" placeholder="Create a new todo..." />
	</form>
</div>
