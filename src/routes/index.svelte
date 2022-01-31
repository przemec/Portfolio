<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Stripes from '$lib/Stripes.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Stripes />
<section>
	<h1>
		Hi,<br />I'm Testing
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		text-align: center;
	}
</style>
