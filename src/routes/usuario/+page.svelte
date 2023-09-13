<script lang="ts">
    import { onMount } from 'svelte';
    import Card from '$components/Card.svelte';

    let queryString = ''; // Initialize a variable to store the query string
    
    // Function to update the query string
    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      login.nome = login.nome + ' ID: ' + queryString;
    }
    
    // Call the updateQueryString function when the component is mounted
    onMount(updateQueryString);

	let login = {
		id: 1,
		nome: 'Gilberto Luis',
		email: 'gilberto@aedb.br',
        papel: 'Aluno',
		senha: '123'
	}

    let projetos = [
      {
          nome: "Projeto 1",
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          id: 1,
          estado: 0
      },
      {
          nome: "Projeto 2",
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          id: 2,
          estado: 1
      },
      {
          nome: "Projeto 3",
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          id: 3,
          estado: 2
      }
  ];
    
</script>

<svelte:head>
	<title>SGTCC - {login.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2">
    <div class="flex w-full items-center">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="imagem de perfil" class="h-20 w-20 rounded-lg border border-text-primary m-3">
        <div class="flex flex-col text-text-secondary font-bold">
            Nome de Usuario: {login.nome} <br>
            E-mail: {login.email} <br>
            Curso: Sistemas de Informação <br>
            Papel: {login.papel} <br>
        </div>
    </div>        
</div>
<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary bg-bg-primary shadow-xl p-5 gap-2 text-sm rounded-xl divide-y divide-bg-secondary">
    <div class="text-text-secondary font-bold text-xl">Participante de Projetos:</div>
    <div class="w-full"></div>
    <div class="cardHolderComponent mt-4">
        {#each projetos as projeto}
            <Card
            item={projeto}
            tipo="projeto"
            />
        {/each}
    </div>
</div>