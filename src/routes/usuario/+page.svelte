<script lang="ts">
    import { onMount } from 'svelte';

    let queryString = ''; // Initialize a variable to store the query string
    
    // Function to update the query string
    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      login.nome = 'Perfil ID: ' + queryString;
    }
    
    // Call the updateQueryString function when the component is mounted
    onMount(updateQueryString);

	let login = {
		id: 1,
		nome: 'Gilberto Luis',
		email: 'gilberto@aedb.br',
		senha: '123'
	}
    
</script>

<svelte:head>
	<title>SGTCC - {login.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary">
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl w-full divide-y divide-bg-bg-secondary">
            <div class="flex flex-col items-center">
                <div class="flex w-full justify-center">
                    <h1 class="text-text-secondary font-bold inline-block pb-3 flex-1">{login.nome}</h1>
                    <button class="m-0 p-0 group">
                        <span class="material-symbols-outlined justify-end group-hover:rotate-45 transition-all">
                            settings
                        </span>
                    </button>
                </div>
                <p class="text-text-secondary font-bold inline-block pb-2">{login.email}</p>
            </div>
        </div>    
</div>