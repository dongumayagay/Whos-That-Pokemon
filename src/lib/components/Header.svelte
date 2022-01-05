<script>
  import { scale } from "svelte/transition";
  import { hidePokemon, pokemon } from "../store";
</script>

<!-- <header>Who's That Pokemon?</header> -->
<header class="h-28 sm:h-36 lg:h-28 px-4 relative overflow-hidden">
  {#if !$pokemon || $hidePokemon}
    <h1
      in:scale={{ delay: 400 }}
      out:scale
      class="
      h-full w-full grid place-items-center
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
      Who's That Pokemon?
    </h1>
  {:else}
    <h1
      in:scale={{ delay: 400 }}
      out:scale
      class="
      h-full w-full grid place-items-center
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
      It's {$pokemon.name}
    </h1>
  {/if}
</header>
<!-- {#if $pokemon}
    {#key $pokemon.name}
      <h1
        in:scale={{ delay: 400 }}
        out:scale
        class="font-pokemon text-3xl
    "
      >
        {$pokemon.name}
      </h1>
    {/key}
  {:else}
    <h1
      in:scale={{ delay: 400 }}
      out:scale
      class="font-pokemon text-3xl
"
    >
      Loading
    </h1>
  {/if} -->
