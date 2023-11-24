<script lang="ts">
	import Header from '../components/Header.svelte';
	import Alert from '$components/Alert.svelte';
	import logo from '../lib/images/logoVazia.png'
	import './styles.css';

	import { connectionError, storeLogin } from './stores';
	import ConnectionError from './errors/+page.svelte';
    import { onMount } from 'svelte';
    import Api from '$repository/axiosInstance';
    import Cookie from '$model/Cookie';

	let connectionErrorValue: number;

	connectionError.subscribe((value) => {
		connectionErrorValue = value;
	});

	async function getData(){
		const userEmail = Cookie.getCookie("email");
		if(userEmail){
			const user = await Api.get('usuarios/email', {email : userEmail});
			if(user){
				storeLogin.set(user);
			}
		}
	}
	onMount(getData);
</script>

<div class="app">
	<Header />
	<Alert />

	<main>
	{#if connectionErrorValue != 200}
		<ConnectionError />
	{:else}
		<slot />
	  {/if}
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
