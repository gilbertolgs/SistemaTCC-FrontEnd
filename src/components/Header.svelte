<script lang="ts">
	import logo from '$lib/images/logoVazia.png';

	let diretorios = [
        {
            link: '/biblioteca',
            nome: 'Biblioteca de Projetos'
        },
		{
			link: '/projetos-pessoais',
			nome: 'Seus Projetos'
		}
    ]

	let diretoriosAdmin = [
		{
			link: '/cadastrar-usuario',
			nome: 'Cadastrar Usuário'
		},
		{
			link: '/cadastrar-curso',
			nome: 'Cadastrar Curso'
		},
		{
			link: '/projetos-pendentes',
			nome: 'Projetos Pendentes'
		},
		
	]

	let sideMenuActive = 'hidden';
	function openMenu(){
		sideMenuActive = sideMenuActive == 'hidden' ? 'flex' : 'hidden'
	}
</script>
<header class="bg-white">
	<nav class="mx-auto flex items-center justify-between p-3 lg:px-6" aria-label="Global">
	  <div class="flex lg:flex-1">
		<a href="/" class="-m-1.5 p-1.5">
		  <img class="h-[50px] w-auto" src="{logo}" alt="">
		</a>
		<button type="button" class="ml-1 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" on:click={openMenu}>
			<span class="sr-only">Abrir Menu</span>
			<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</button>
	  </div>
		  
	  <div class="lg:justify-end">
		<a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in</a>
	  </div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="{sideMenuActive}" role="dialog" aria-modal="true">
	  <!-- Background backdrop, show/hide based on slide-over state. -->
	  <div class="fixed inset-y-0 left-0 z-10 w-full overflow-y-hidden bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
		<div class="flex items-center justify-between">
		  <a href="/" class="-m-1.5 p-1.5">
			<span class="sr-only">Your Company</span>
			<img class="h-[50px] w-auto" src="{logo}" alt="">
		  </a>
		  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={openMenu}>
			<span class="sr-only">Abrir Menu</span>
			<svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		  </button>
		</div>
		<div class="mt-6 flow-root">
		  <div class="-my-6 divide-y divide-gray-500/10">
			{#each diretorios as diretorio}
				<div class="space-y-2 py-6">
					<a href="{diretorio.link}" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{diretorio.nome}</a>
				</div>
			{/each}
		  </div>
		</div>
	  </div>
	</div>
  </header>
