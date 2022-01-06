<script>
	import { scale } from 'svelte/transition';
	import { hidePokemon, numOfQuestions, pokemon } from '../store';
</script>

<header class="h-28 sm:h-36 lg:h-28 px-4 relative overflow-hidden">
	<h1
		in:scale={{ delay: 400 }}
		out:scale
		class=" h-full w-full grid place-items-center
				font-pokemon capitalize text-yellow-400
				text-5xl
				[-webkit-text-stroke:2px_#0369a1;]
				[text-shadow:-2px_2px_#171717;]
				sm:text-7xl
				sm:[text-shadow:-3px_3px_#171717;]
				lg:text-7xl
				lg:[-webkit-text-stroke:3px_#0369a1;]
				lg:[text-shadow:-5px_5px_#171717;]
      			"
	>
		{#if ($pokemon && $hidePokemon) || (!$pokemon && $numOfQuestions === 0)}
			Who's That Pokemon?
		{:else if !$pokemon && $numOfQuestions !== 0}
			Your Score
		{:else}
			It's {$pokemon.name}
		{/if}
	</h1>
</header>
