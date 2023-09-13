<script>
	import Header from '../components/Header.svelte';
	import logo from '../lib/images/logoVazia.png'
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot/>
	</main>

	<footer class="bg-bg-primary">
		<img class="h-[40px] w-auto" src="{logo}" alt="">
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-left: 50px;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 1024px) {
		main {
			padding-left: 0px;
		}
	}
</style>
