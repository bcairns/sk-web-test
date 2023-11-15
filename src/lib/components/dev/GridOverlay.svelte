<script>
	import MaxWidthAndPadding from '../common/MaxWidthAndPadding.svelte';
</script>

<div class="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-50" style="opacity:0.05">
	<MaxWidthAndPadding xl18 class="h-full grid gap grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-14 xl16:grid-cols-16 xl18:grid-cols-18">
		<div class="hidden xl18:block bg-blue" />
		<div class="hidden xl16:block bg-blue" />
		<div class="hidden xl:block bg-blue" />
		{#each { length: 4 } as _, index}
			<div class="bg-green" />
		{/each}
		{#each { length: 4 } as _, index}
			<div class="bg-green hidden md:block" />
		{/each}
		{#each { length: 4 } as _, index}
			<div class="bg-green hidden lg:block" />
		{/each}
		<div class="hidden xl:block bg-blue" />
		<div class="hidden xl16:block bg-blue" />
		<div class="hidden xl18:block bg-blue" />
	</MaxWidthAndPadding>
</div>
