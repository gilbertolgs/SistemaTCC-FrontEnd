<script lang="ts">
	import logo from '$lib/images/logoVazia.png';
	import { browser } from '$app/environment';

	let diretorios = [
        {
            link: '/biblioteca',
            nome: 'Biblioteca de Projetos',
			icon: 'library_books'
        },
		{
			link: '/projetos-pessoais',
			nome: 'Seus Projetos',
			icon: 'menu_book'
		},
		{
			link: '/bancas',
			nome: 'Bancas',
			icon: 'groups'
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

	let sideMenuActive = 'w-11';
	let textoVisivel = 'scale-0 fixed';
	let colorTheme = 'light';
	let rotateIcon = '';
	function openMenu(){
		// sideMenuActive = sideMenuActive == 'decreaseWidth' ? 'increaseWidth' : 'decreaseWidth';
		sideMenuActive = sideMenuActive == 'w-11' ? 'w-full' : 'w-11';
		textoVisivel = textoVisivel == 'scale-0 fixed' ? 'scale-100' : 'scale-0 fixed';
	}

	function changeTheme(){
		colorTheme = colorTheme == 'light' ? 'dark' : 'light';
		rotateIcon = rotateIcon == '' ? 'animate-spin' : '';
	}

</script>

<header class="bg-white" id="navBar">
	<nav class="mx-auto flex items-center justify-between p-3 lg:px-6" >
	  <div class="flex lg:flex-1">

	  </div>
	  <div class="justify-end">
		<a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in</a>
	  </div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:flex" role="dialog" aria-modal="true">
	  <!-- Background backdrop, show/hide based on slide-over state. -->
	  <div class="fixed inset-y-0 left-0 z-10 overflow-x-hidden bg-white p-6 pl-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 {sideMenuActive} transition-all delay-70 ease-linear">
		<div class="flex items-center justify-between mb-3">
		  <a href="/" class="-m-1.5 p-1.5">
			<span class="sr-only">Your Company</span>
			<img class="h-[50px] w-auto" src="{logo}" alt="">
		  </a>
		  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={openMenu}>
			<span class="material-symbols-outlined">
				menu
			</span>
		  </button>
		</div>
		<hr>
		<div class="h-[80%] absolute w-full divide-y divide-gray-500/10 flex flex-col">
			<ul class="flex-1">
				{#each diretorios as diretorio}
				<li class="space-y-2 py-3 w-full m-1">
					<a href="{diretorio.link}" class="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center">
						<span class="material-symbols-outlined mr-3">
							{diretorio.icon}
						</span>
						<span class="{textoVisivel} transition-all delay-50">
							{diretorio.nome}
						</span>
					</a>
				</li>
				{/each}
			</ul>
			<ul class="justify-end">
				<li class="space-y-2 py-3 w-full m-1">
					<button class="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center w-full hover:underline" on:click={changeTheme}>
						{#if colorTheme=='dark'}
						<span class="material-symbols-outlined mr-3 text-blue-500 transition-all duration-150 {rotateIcon}">
							dark_mode
						</span>
						{:else}
						<span class="material-symbols-outlined mr-3 text-yellow-500 transition-all duration-150 {rotateIcon}">
							light_mode
						</span>
						{/if}
						<span class="{textoVisivel} transition-all delay-50">
							Mudar Tema
						</span>
					</button>
				</li>
				<li class="space-y-2 py-3 w-full m-1">
					<a href="/login" class="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center">
						<span class="material-symbols-outlined mr-3 text-red-500">
							logout
						</span>
						<span class="{textoVisivel} transition-all delay-50">
							Sair
						</span>
					</a>
				</li>
			</ul>
		</div>
	  </div>
	</div>
</header>