<script lang="ts">
	import logo from '$lib/images/logoVazia.png';
    import type Convite from '$model/Covite';
    import { onMount } from 'svelte';
    import { storeConvites, storeLogin } from '../routes/stores';
	import DropDown from './DropDown.svelte';
    import type User from '$model/User';

	function getData(){
		notificacoes = [];

		if(localStorage.getItem('theme') != null){
			if(localStorage.getItem('theme') == 'dark'){
				colorTheme = 'dark'
				document.documentElement.setAttribute("data-theme", colorTheme);
			}
			else if(localStorage.getItem('theme') == 'light'){
				colorTheme = 'light'
				document.documentElement.setAttribute("data-theme", colorTheme);
			}

		}
		else{
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			  // Usuario prefere tema escuro
			  colorTheme = 'dark';
			} else {
			  // Usuario prefere tema claro
			  colorTheme = 'light';
			}
		}

	}
	onMount(getData);

	let convites: Convite[] = [];

	storeConvites.subscribe((value) => {
		convites = value;
		notificacoes = [];

		
		if(convites.length == 0){
			notificacoes = [];
		}
		
		for (const convite of convites) {
			notificacoes.push({
				link: 'convites',
      			nome: 'Convite para Projeto: ' + convite.projeto.nome
    		});
		}
	});
	
	let currentUser: User | null = null;

	storeLogin.subscribe((value) => {
		currentUser = value;		

		if(currentUser.id != 0){		
			if(currentUser.papel == "Administrador"){
				diretorios = diretoriosAdmin;
			}
			else{
				diretorios = diretoriosUsuario;
			}
		}
		else{
			diretorios = diretoriosPadrao;
		}
	});

	$: notificacoes = [
		{
			link: 'convites',
			nome: 'Convite para Projeto 1'
		}
	];

	$: diretorios = [
        {
            link: 'biblioteca',
            nome: 'Biblioteca de Projetos',
			icon: 'library_books'
        }
    ]

	$: diretoriosPadrao = [
        {
            link: 'biblioteca',
            nome: 'Biblioteca de Projetos',
			icon: 'library_books'
        }
    ]

	$: diretoriosUsuario = [
		{
            link: 'biblioteca',
            nome: 'Biblioteca de Projetos',
			icon: 'library_books'
        },
		{
			link: 'projetos-pessoais',
			nome: 'Seus Projetos',
			icon: 'menu_book'
		},
		/*{
			link: 'bancas',
			nome: 'Bancas',
			icon: 'groups'
		},*/
		{
			link: 'convites',
			nome: 'Convites',
			icon: 'email'
		}
	]

	$: diretoriosAdmin = [
		{
            link: 'biblioteca',
            nome: 'Biblioteca de Projetos',
			icon: 'library_books'
        },
		{
			link: 'cadastrar-usuario',
			nome: 'Cadastrar Usuário',
			icon: 'person_add'
		},
		{
			link: 'gerenciar-curso',
			nome: 'Gerenciar Curso',
			icon: 'post_add'
		},
		{
			link: 'projetos-pendentes',
			nome: 'Projetos Pendentes',
			icon: 'assignment_late'
		},
		
	];
	//Tirar para debugar
	//diretorios.push(...diretoriosUsuario);
	//diretorios.push(...diretoriosAdmin);

	let sideMenuActive = 'w-11';
	let textoVisivel = 'scale-0 fixed';
	let colorTheme = 'light';

	function openMenu(){
		sideMenuActive = sideMenuActive == 'w-11' ? 'w-full' : 'w-11';
		textoVisivel = textoVisivel == 'scale-0 fixed' ? 'scale-100' : 'scale-0 fixed';
	};

	function changeTheme(){
		colorTheme = colorTheme == 'light' ? 'dark' : 'light';

		document.documentElement.setAttribute("data-theme", colorTheme);
		localStorage.setItem('theme', colorTheme);
	};
</script>

<header class="bg-base-100" id="navBar">
	<nav class="mx-auto flex items-center justify-between p-3 lg:px-6" >
	  <div class="flex lg:flex-1 h-11">

	  </div>
	  <div class="justify-end text-text-primary flex items-center">
		<button class="mr-4 group">
			{#if notificacoes.length > 0}
			<span class="relative flex h-3 w-3 left-4 top-2">
				<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-content-primary brightness-110 opacity-75"></span>
				<span class="relative inline-flex rounded-full h-3 w-3 bg-content-primary"></span>
			</span>
			<span class="material-symbols-outlined hover:cursor-pointer hover:scale-110">
				notifications
			</span>
			<div class="dropDownComponent group-hover:openDropDownComponent right-0 top-10 mt-3">
				<DropDown
				id={0}
				dados={notificacoes}
				perfil={null}
				/>
			</div>
			{/if}
		</button>
		{#if currentUser?.id != 0}
		<div>
			<button class="group text-sm font-semibold leading-6 hover:underline hover:cursor-pointer">
				{currentUser?.nome}
				<div class="dropDownComponent group-hover:openDropDownComponent right-0 top-10 mt-3">
					<DropDown
					id={0}
					perfil={currentUser}
					dados={null}
					/>
				</div>
			</button>
		</div>
		{:else}
		<a href="login" class="text-sm font-semibold leading-6">Log in</a>
		{/if}
	  </div>
	</nav>
	<div class="lg:flex" role="dialog" aria-modal="true">
	  <div class="fixed inset-y-0 left-0 z-10 overflow-x-hidden bg-base-100 p-6 pt-2 pl-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 {sideMenuActive} transition-all delay-70 ease-linear">
		<div class="flex items-center justify-between mb-2">
		  <a href="biblioteca" class="-m-1.5 p-1.5">
			<span class="sr-only">Your Company</span>
			<img class="h-[50px] w-auto" src="{logo}" alt="">
		  </a>
		  <button type="button" class="-m-2.5 rounded-md p-2.5 text-text-primary" on:click={openMenu}>
			<span class="material-symbols-outlined">
				menu
			</span>
		  </button>
		</div>
		<hr>
		<div class="h-[80%] absolute w-full divide-y divide-gray-500/10 flex flex-col">
			<ul class="flex-1">
				{#each diretorios as diretorio}
				<li class="space-y-2 py-3 w-full m-1 group">
					<a href="{diretorio.link}" class="-mx-3 hover:brightness-90 bg-base-100 rounded-lg px-3 py-2 text-base hover:shadow-2xl font-semibold leading-7 text-text-primary flex items-center">
						<span class="material-symbols-outlined mr-3 group-hover:scale-110">
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
				<!-- TODO: REVER ESSA CHECKBOX
				<label class="swap swap-rotate">
				<input type="checkbox" class="theme-controller" value="synthwave" />
				<span class="swap-off material-symbols-outlined mr-3 text-yellow-500">
					light_mode
				</span>
				<span class="swap-on material-symbols-outlined mr-3 text-blue-500">
					dark_mode
				</span>
				</label> -->
				<li class="space-y-2 py-3 w-full m-1 group">
					<button class="-mx-3 rounded-lg px-3 py-2 text-base hover:brightness-90 bg-base-100 hover:shadow-2xl font-semibold leading-7 text-text-primary flex items-center w-full hover:underline" on:click={changeTheme}>
						{#if colorTheme=='dark'}
						<span class="material-symbols-outlined mr-3 text-blue-500 transition-all duration-150 animate-spin-once group-hover:scale-110">
							dark_mode
						</span>
						{:else}
						<span class="material-symbols-outlined mr-3 text-yellow-500 transition-all duration-150 animate-spin-once group-hover:scale-110">
							light_mode
						</span>
						{/if}
						<span class="{textoVisivel} transition-all delay-50">
							Mudar Tema
						</span>
					</button>
				</li>
				{#if currentUser?.id != 0}
				<li class="space-y-2 py-3 w-full m-1 group">
					<a href="logout" class="-mx-3 rounded-lg px-3 py-2 text-base hover:brightness-90 bg-base-100 hover:shadow-2xl font-semibold leading-7 text-text-primary flex items-center">
						<span class="material-symbols-outlined mr-3 text-red-500 group-hover:scale-110">
							logout
						</span>
						<span class="{textoVisivel} transition-all delay-50">
							Sair
						</span>
					</a>
				</li>
				{/if}
			</ul>
		</div>
	  </div>
	</div>
</header>