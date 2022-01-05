<script>
	import { hidePokemon, showSelectGenerations, choices, pokemon } from '../store';
	import { getRandomPokemon, selectRandomPokemonIdFromGen } from '../pokemon';
	const showPokemon = () => ($hidePokemon = false);
	function checkAnswer(answer) {
		showPokemon();
		selectRandomPokemonIdFromGen();
		return $pokemon.name === answer;
	}
	function reset() {
		$pokemon = null;
		// getRandomPokemon();
		selectRandomPokemonIdFromGen();
	}
</script>

<!-- <section
  class="container relative py-4 px-8 space-y-4 flex flex-col sm:space-y-0 sm:flex-row sm:space-x-6 overflow-hidden"
>
  {#if !$pokemon}
    <button
      on:click={getRandomPokemon}
      class="bg-emerald-500 border-emerald-700 text-white btn
">{!$pokemon ? "Play" : "Next"}</button
    >

    {#if $pokemon}
      <button
        on:click={reset}
        class="bg-violet-500 border-violet-700 text-white btn
">Quit</button
      >
    {:else}
      <button
        on:click={() => ($showSelectGenerations = true)}
        class="bg-violet-500 border-violet-700 text-white btn
">Select Gen</button
      >
    {/if}

    <a
      href={"#score"}
      class=" btn text-white  btn-disable
">Stats</a
    >
  {:else}
    {#each $choices as choice}
      <button
        on:click={() => checkAnswer(choice)}
        class="bg-white text-black border-neutral-400 btn"
      >
        {choice}
      </button>
    {/each}
    <button
      on:click={getRandomPokemon}
      class="bg-sky-500 border-sky-700 text-white btn
">{$hidePokemon ? "Skip" : "Next"}</button
    >
  {/if}
</section> -->

<section class="container grid sm:grid-cols-2 gap-4 px-4">
	{#if !$pokemon}
		<button on:click={getRandomPokemon} class="btn bg-emerald-500 border-b-emerald-700 text-white"
			>Play</button
		>
		<button
			on:click={() => ($showSelectGenerations = true)}
			class="btn bg-pink-500 border-b-pink-700 text-white">Select Gen</button
		>
	{:else}
		{#each $choices as choice}
			<button
				on:click={() => checkAnswer(choice)}
				class="bg-white text-black border-neutral-400 btn"
			>
				{choice}
			</button>
		{/each}
		{#if $hidePokemon}
			<button
				on:click={reset}
				class="bg-sky-500 border-sky-700 text-white btn
">Quit</button
			>{:else}
			<button
				on:click={getRandomPokemon}
				class="bg-sky-500 border-sky-700 text-white btn
">{'Next'}</button
			>
		{/if}
	{/if}
	<!--  -->
</section>
