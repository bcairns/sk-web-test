<script>
    import { settings } from "$lib/stores/settings";
    import ProductCard from "$lib/components/mock/ProductCard.svelte";
    import FluidWidthAndPadding from "$lib/components/common/FluidWidthAndPadding.svelte";
</script>

<div class=""
     style:--min-width={$settings.minCardWidth}
>

    <FluidWidthAndPadding>
        <h2 class="font-bold text-20 mt-10 mb-6">Fluid Product Grid</h2>

        <div class="product-grid grid gap">
            {#each {length: 24} as _}
                <ProductCard />
            {/each}
        </div>
    </FluidWidthAndPadding>

</div>

<style>
    .product-grid {
        grid-template-columns: repeat(auto-fill, minmax(var(--min-width), 1fr));
    }
</style>