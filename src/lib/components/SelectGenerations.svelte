<script>
	import { selectedGenerations, showSelectGenerations } from '../store';
	import { selectRandomPokemonIdFromGen } from '../pokemon';
	import { fade, scale } from 'svelte/transition';
	const options = [1, 2, 3, 4, 5, 6, 7, 8];
	const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
	let temp_selectedGen = $selectedGenerations;

	function saveSelectedGeneration() {
		$selectedGenerations = temp_selectedGen;
		$showSelectGenerations = false;
		selectRandomPokemonIdFromGen();
	}
</script>

<div class="fixed h-full w-full bg-black/50 z-20 grid place-items-center px-4" transition:fade>
	<div
		class=" bg-neutral-200 rounded-xl gap-4 w-full sm:w-[500px] px-8 py-6 grid grid-cols-2 "
		transition:scale
	>
		{#each options as gen}
			<label class=" {temp_selectedGen.includes(gen) ? 'btn-selected' : ''}  btn col-span-2">
				<input
					type="checkbox"
					bind:group={temp_selectedGen}
					name="generations"
					value={gen}
					class="invisible absolute"
				/>
				Gen {roman[gen - 1]}
			</label>
		{/each}
		<button
			disabled={temp_selectedGen.length === 0}
			class="flex-1 {temp_selectedGen.length === 0
				? 'btn-disable'
				: ' bg-green-500 text-white border-green-700'} btn"
			on:click={saveSelectedGeneration}
		>
			Apply
		</button>
		<button
			disabled={temp_selectedGen.length === 0}
			class="flex-1 {temp_selectedGen.length === 0
				? 'btn-disable'
				: 'bg-red-500 text-white border-red-700 '} btn"
			on:click={() => ($showSelectGenerations = false)}
		>
			Close
		</button>
	</div>
</div>
