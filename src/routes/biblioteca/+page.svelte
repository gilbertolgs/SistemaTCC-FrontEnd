<script lang="ts">
    import { goto } from '$app/navigation';
    import logo from '$lib/images/logoVazia.png';
    import { PUBLIC_PAGENAME } from '$env/static/public';
    let projetos = [
        {
            nome: "Projeto 1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 1
        },
        {
            nome: "Projeto 2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 2
        },
        {
            nome: "Projeto 3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 3
        },
        {
            nome: "Projeto 4",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 4
        }
    ]
</script>
<svelte:head>
	<title>{PUBLIC_PAGENAME} - Projetos Publicados</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <h1>
        Biblioteca de Trabalhos de Conclusão de Curso
    </h1>
    <div class="shadow-sm my-8 relative rounded-xl overflow-auto bg-slate-50 flex justify-between flex-wrap">
                {#each projetos as projeto}
                <div class="group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl hover:scale-105 transition-all m-4 w-[30%] border border-slate-500">
                      <div class="h-40 bg-blue-500">
                        <img
                          src=''
                          alt='City'
                          class="h-40 w-full object-cover object-center hidden"
                        />
                      </div>
                      <div class="h-1/2 p-4 ">
                        <h3 class="mb-2 text-base font-semibold text-blue-800">
                          <a href='/projeto/{projeto.id}' class="hover:underline">
                            {projeto.nome}
                          </a>
                        </h3>                        
                        <div class='flex flex-row justify-between text-xs mt-2'> 
                            <p>{projeto.descricao}</p>
                        </div>
                      </div>
                </div>
            {/each}
    </div>
</div>