<script>
	import { selectedGenerations, showSelectGenerations } from '../store';
	import { selectRandomPokemonIdFromGen } from '../pokemon';
	import { fade, scale } from 'svelte/transition';
	const options = [1, 2, 3, 4, 5, 6, 7, 8];
	const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
	// const check = 'bg-blue-500 text-white border-blue-700';
	// const notCheck = 'bg-white text-black border-neutral-400';

	function isSelected(gen) {
		return temp_selectedGen.includes(gen);
	}

	function saveSelectedGeneration() {
		$selectedGenerations = temp_selectedGen;
		$showSelectGenerations = false;
		selectRandomPokemonIdFromGen();
	}
	let temp_selectedGen = $selectedGenerations;
</script>

<div class="fixed h-full w-full bg-black/50 z-20 grid place-items-center px-4" transition:fade>
	<div
		class=" bg-neutral-200 rounded-xl gap-4 w-full sm:w-[500px] px-8 py-6 grid grid-cols-2 "
		transition:scale
	>
		{#each options as gen}
			<label class=" {temp_selectedGen.includes(gen) ? 'btn-selected' : ''}  btn col-span-2">
				<!-- class={`btn col-span-2`} class:btn-selected={isSelected(gen)} -->
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
		<!-- <div class="flex gap-4"> -->
		<button
			disabled={temp_selectedGen.length === 0}
			class="flex-1 {temp_selectedGen.length === 0
				? 'btn-disable'
				: ' bg-green-500 text-white border-green-700'} btn"
			on:click={saveSelectedGeneration}>Apply</button
		>
		<button
			disabled={temp_selectedGen.length === 0}
			class="flex-1 {temp_selectedGen.length === 0
				? 'btn-disable'
				: 'bg-red-500 text-white border-red-700 '} btn"
			on:click={() => ($showSelectGenerations = false)}>Close</button
		>
		<!-- </div> -->
	</div>
</div>
