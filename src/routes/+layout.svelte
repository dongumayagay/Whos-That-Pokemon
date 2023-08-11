<script lang="ts">
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main
	class="bg-gradient-to-tr from-yellow-500 via-orange-500 to-red-500 scroll-smooth bg-fixed min-h-full"
>
	<slot />
</main>
