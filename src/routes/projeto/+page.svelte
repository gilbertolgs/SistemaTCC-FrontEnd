<script lang="ts">
    import { onMount } from 'svelte';

    let queryString = ''; // Initialize a variable to store the query string
    
    // Function to update the query string
    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      projeto.nome = 'Projeto ' + queryString
    }
    
    // Call the updateQueryString function when the component is mounted
    onMount(updateQueryString);

    let projeto = {
        id: 1,
        nome: 'Projeto 1',
        descricao: 'Lorem ipsum'
    }

    let comentarios = [
        {
            id: 1,
            texto: 'Lorem Ipsum',
            editado: false,
            avaliacao: false,
            usuario: {
                id: 2,
                nome: 'Loreno'
            }
        },
        {
            id: 2,
            texto: 'Lorem Ipsum',
            editado: false,
            avaliacao: false,
            usuario: {
                id: 3,
                nome: 'Ipsono'
            }
        }
    ]
    
</script>

<svelte:head>
	<title>SGTCC - {projeto.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary">
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl w-full divide-y divide-bg-bg-secondary">
            <div class="flex flex-col items-center">
                <div class="flex w-full justify-center">
                    <h1 class="text-text-secondary font-bold inline-block pb-3 flex-1">{projeto.nome}</h1>
                    <button class="m-0 p-0 group">
                        <span class="material-symbols-outlined justify-end group-hover:rotate-45 transition-all">
                            settings
                        </span>
                    </button>
                </div>
                <p class="text-text-secondary font-bold inline-block pb-2">{projeto.descricao}</p>
            </div>
            <div>
                <h1>Comentarios</h1>
                <ul class="mt-5">
                    {#each comentarios as comentario}
                    <li class="flex flex-col mb-3 border border-bg-secondary p-3 rounded-lg">
                        <a href="usuario?id={comentario.usuario.id}" class="text-content-primary underline hover:brightness-90">
                            {comentario.usuario.nome}
                        </a>
                        {comentario.texto}
                    </li>
                    {/each}
                </ul>
            </div>
        </div>    
</div>