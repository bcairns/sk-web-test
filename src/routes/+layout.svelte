<script>
	import '../app.scss';
	import { settings } from "$lib/stores/settings";
	import MaxWidthAndPadding from "$lib/components/common/MaxWidthAndPadding.svelte";
	import FluidWidthAndPadding from "$lib/components/common/FluidWidthAndPadding.svelte";
	import GridOverlay from "$lib/components/dev/GridOverlay.svelte";
	import FluidMaxWidthAndPadding from "$lib/components/common/FluidMaxWidthAndPadding.svelte";
	import Settings from "$lib/components/dev/Settings.svelte";

	export let grid = true;
</script>

<header class="bg-gray-900">

	{#if $settings.col12}
		<div class="">
			<MaxWidthAndPadding class="flex gap justify-between py-4">
				<div class="">LOGO (12-column, baseline default)</div>
				<div class="">Menu</div>
			</MaxWidthAndPadding>
		</div>
	{/if}
	{#if $settings.grid}
		{#if $settings.col14}
			<div class="bg-gray-800">
				<MaxWidthAndPadding xl class="flex gap justify-between py-4">
					<div class="">LOGO (14-column fixed grid, "XL")</div>
					<div class="">Menu</div>
				</MaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col16}
			<div class="">
				<MaxWidthAndPadding xl16 class="flex gap justify-between py-4">
					<div class="">LOGO (16-column fixed grid)</div>
					<div class="">Menu</div>
				</MaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col18}
			<div class="bg-gray-800">
				<MaxWidthAndPadding xl18 class="flex gap justify-between py-4">
					<div class="">LOGO (18-column fixed grid)</div>
					<div class="">Menu</div>
				</MaxWidthAndPadding>
			</div>
		{/if}
	{/if}

	{#if $settings.fluid}
		{#if $settings.col14}
			<div class="">
				<FluidMaxWidthAndPadding xl class="flex gap justify-between py-4">
					<div class="">LOGO (14-column fluid)</div>
					<div class="">Menu</div>
				</FluidMaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col16}
			<div class="bg-gray-800">
				<FluidMaxWidthAndPadding xl16 class="flex gap justify-between py-4">
					<div class="">LOGO (16-column fluid)</div>
					<div class="">Menu</div>
				</FluidMaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col18}
			<div class="">
				<FluidMaxWidthAndPadding xl18 class="flex gap justify-between py-4">
					<div class="">LOGO (18-column fluid)</div>
					<div class="">Menu</div>
				</FluidMaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.full}
			<div class="bg-gray-800">
				<FluidWidthAndPadding class="flex gap justify-between py-4">
					<div class="">LOGO (full-width fluid)</div>
					<div class="">Menu</div>
				</FluidWidthAndPadding>
			</div>
		{/if}
	{/if}

</header>

<main>
	<slot />
</main>

<footer class="bg-gray-200 text-white mt-16">

	{#if $settings.col12}
		<div class="">
			<MaxWidthAndPadding class="flex gap justify-between py-6">
				<div class="">&copy; 2023 LOGO (12-column baseline default)</div>
				<div class="">About | Legal | Privacy</div>
			</MaxWidthAndPadding>
		</div>
	{/if}
	{#if $settings.grid}
		{#if $settings.col14}
			<div class="bg-gray-450">
				<MaxWidthAndPadding xl class="flex gap justify-between py-6">
					<div class="">&copy; 2023 LOGO (14-column fixed grid, "XL")</div>
					<div class="">About | Legal | Privacy</div>
				</MaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col16}
			<div class="">
				<MaxWidthAndPadding xl16 class="flex gap justify-between py-6">
					<div class="">&copy; 2023 LOGO (16-column fixed grid)</div>
					<div class="">About | Legal | Privacy</div>
				</MaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col18}
			<div class="bg-gray-450">
				<MaxWidthAndPadding xl18 class="flex gap justify-between py-6">
					<div class="">&copy; 2023 LOGO (18-column fixed grid)</div>
					<div class="">About | Legal | Privacy</div>
				</MaxWidthAndPadding>
			</div>
		{/if}
	{/if}

	{#if $settings.fluid}
		{#if $settings.col14}
			<div class="">
				<FluidMaxWidthAndPadding xl class="flex gap justify-between py-6">
					<div class="">&copy; 2023 LOGO (14-column fluid)</div>
					<div class="">About | Legal | Privacy</div>
				</FluidMaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col16}
			<div class="bg-gray-450">
				<FluidMaxWidthAndPadding xl16 class="flex gap justify-between py-6">
					<div class="">&copy; 2023 LOGO (16-column fluid)</div>
					<div class="">About | Legal | Privacy</div>
				</FluidMaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.col18}
			<div class="">
				<FluidMaxWidthAndPadding xl18 class="flex gap justify-between py-6">
					<div class="">&copy; 2023 LOGO (18-column fluid)</div>
					<div class="">About | Legal | Privacy</div>
				</FluidMaxWidthAndPadding>
			</div>
		{/if}
		{#if $settings.full}
			<div class="bg-gray-450">
				<FluidWidthAndPadding class="flex gap justify-between py-6">
					<div class="">&copy; 2023 LOGO (full-width fluid)</div>
					<div class="">About | Legal | Privacy</div>
				</FluidWidthAndPadding>
			</div>
		{/if}
	{/if}

</footer>

<GridOverlay />

<Settings />