<script>
    import { fade, slide, fly } from "svelte/transition";
    import { settings, reset } from "$lib/stores/settings";
    import {persisted} from "svelte-persisted-store";

    let open = persisted('skwt.settings.open', false, {storage: 'session'});
</script>

<div class="fixed top-0 right-0">

    {#if $open}
        <div transition:fly={{y: "-100%"}} class="shadow-lg border-b-2 border-l-2 border-gray-600/20 rounded-bl-2xl p-4 bg-white/40 pt-3"
             style:backdrop-filter="blur(3px)"
        >
            <h2>Settings</h2>

            <h3></h3>

            <h3>Headers/Footers</h3>
            <label class="">
                <input bind:checked={$settings.grid} type="checkbox"> Grid
            </label>
            <label class="">
                <input bind:checked={$settings.fluid} type="checkbox"> Fluid
            </label>
            <label class="">
                <input bind:checked={$settings.col12} type="checkbox"> 12-Col
            </label>
            <label class="">
                <input bind:checked={$settings.col14} type="checkbox"> 14-Col
            </label>
            <label class="">
                <input bind:checked={$settings.col16} type="checkbox"> 16-Col
            </label>
            <label class="">
                <input bind:checked={$settings.col18} type="checkbox"> 18-Col
            </label>
            <label class="">
                <input bind:checked={$settings.full} type="checkbox"> Full
            </label>

            <h3>Product Cards</h3>
            <label class="">
                Min. Width: <input class="border w-16" bind:value={$settings.minCardWidth}>
            </label>

            <div class="mt-4">
                <button class="border px-2" on:click={reset}>Reset</button>
            </div>


        </div>
    {/if}

    <button on:click={() => $open = !$open}
            class="absolute right-1.5 top-0.5 text-36 hover:opacity-100" style="font-family:monospace"
            class:opacity-50={!$open}
    >
        &#9881;
    </button>

</div>

<style>
    h2 {
        @apply font-bold text-18;
    }
    h3 {
        @apply font-bold mt-2;
    }
    label {
        display: block;
    }
</style>