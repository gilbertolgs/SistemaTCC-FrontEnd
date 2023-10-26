<script lang="ts">
    import { onMount } from 'svelte';
    import { pageName } from '../stores';
    import DropDown from '$components/DropDown.svelte';
    import Modal from '$components/Modal.svelte';
    import Comentarios from '$components/Comentarios.svelte';

    import Api from '$repository/axiosInstance';
    import Projeto from '$model/Projeto';

    let login: any = localStorage.getItem("login");
    if(login) {
        login = JSON.parse(login);
    }

    let queryString = '';
    let idProjeto: number;
    let projetoEditado = {
        id: 0,
        nome: "string",
        descricao: "string"
    }

    let projeto: Projeto = new Projeto(
        0,
        0,
        0,
        '',
        '',
        null
    );

    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      idProjeto = parseInt(queryString);

      opcoes[0].link = `configuracoes-projeto?id=${idProjeto}`

      getData();
    }

    async function getData(){
        projeto = await Api.get(`projetos/${idProjeto}`);
    }

    onMount(updateQueryString);

    let dadosModal: any;

    let opcoes = [
        {
            link: 'configuracoes-projeto',
            nome: 'Gerenciar Projeto'
        },
    ]
    //Funções Componentes
    let toggleModal: () => void;
</script>

<svelte:head>
	<title>{pageName} - {projeto.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Modal
bind:toggleModal={toggleModal}
dados={dadosModal}
/>
<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary">
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl w-full divide-y divide-bg-bg-secondary">
            <div class="flex flex-col items-center">
                <div class="flex w-full justify-center">
                    <h1 class="text-text-secondary font-bold inline-block pb-3 flex-1">{projeto.nome}</h1>                    
                    <div>
                        <button class="m-0 p-0 group">
                            <span class="material-symbols-outlined justify-end group-hover:rotate-45 transition-all">
                                settings
                            </span>
                            <div class="dropDownComponent group-hover:openDropDownComponent" >
                            <DropDown
                            id={0}
                            dados={opcoes}
                            perfil={null}
                            />
                            </div>
                        </button>
                    </div>
                </div>
                <p class="text-text-secondary font-bold inline-block pb-2">{projeto.descricao}</p>
            </div>
            <div>
                {#if projeto.id != 0}
                <Comentarios
                bind:projeto={projeto}
                />
                {/if}
            </div>
        </div>    
</div>