<script>
	import {
		hidePokemon,
		showSelectGenerations,
		choices,
		pokemon,
		numOfRightAnswer,
		numOfQuestions
	} from '../store';
	import { getRandomPokemon, selectRandomPokemonIdFromGen } from '../pokemon';

	const showPokemon = () => ($hidePokemon = false);
	let right_answer = null;
	let wrong_answer = null;
	function play() {
		$numOfQuestions = 0;
		$numOfRightAnswer = 0;
		getRandomPokemon();
	}

	function checkAnswer(answer) {
		showPokemon();
		selectRandomPokemonIdFromGen();
		right_answer = $pokemon.name;
		$numOfQuestions += 1;
		if (answer !== right_answer) {
			wrong_answer = answer;
		} else {
			$numOfRightAnswer += 1;
		}
	}
	function quit() {
		$pokemon = null;
		right_answer = null;
		selectRandomPokemonIdFromGen();
	}
</script>

<section class="container grid sm:grid-cols-2 gap-4 px-4">
	{#if !$pokemon}
		<button on:click={play} class="btn bg-emerald-500 border-b-emerald-700 text-white">
			{$numOfQuestions === 0 ? 'Play' : 'Play Again'}
		</button>
		<button
			on:click={() => ($showSelectGenerations = true)}
			class="btn bg-pink-500 border-b-pink-700 text-white">Select Gen</button
		>
	{:else}
		{#each $choices as choice}
			<button
				on:click={() => checkAnswer(choice)}
				class="btn {choice === right_answer ? 'btn-correct' : ''} {choice === wrong_answer
					? 'btn-wrong'
					: ''}"
				class:btn-disable={!$hidePokemon}
				disabled={!$hidePokemon}
			>
				{choice}
			</button>
		{/each}
		{#if $hidePokemon}
			<button
				on:click={quit}
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
</section>
