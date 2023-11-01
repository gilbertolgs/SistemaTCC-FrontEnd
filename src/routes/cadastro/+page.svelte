<script lang="ts">
    import { onMount } from 'svelte';
    import { pageName } from '../stores';
    import type Curso from '$model/Curso'
    import Usuario from '$model/Usuario';
    import Api from '$repository/axiosInstance';
    import { goto } from '$app/navigation';

    let txtNome: string;
    let txtEmail: string;
    let txtSenha: string;
    let lstCurso: number;    
    
    let cursos: Curso[] = [];
    
    async function getData(){
        cursos = await Api.get('cursos');
    }

    onMount(getData);

    function checarCampos(){
        if(lstCurso == undefined){
            return false;
        }
        else if(txtNome == undefined){
            return false;
        }
        else if(txtEmail == undefined || txtEmail.includes('@aedb.br') == false){
            return false;
        }
        else if(txtSenha == undefined){
            return false;
        }
        return true;
    }

    function criarUsuario(){        
        if(checarCampos()){
            const user = new Usuario(
                lstCurso,
                txtNome,
                txtEmail,
                txtSenha,
                'Aluno',
                0,
                null
            );
            
            Api.post('usuarios/CriarUsuario', user);

            goto('login');
        }
    }
</script>

<svelte:head>
	<title>{pageName} - Cadastro</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary">
    <div class="h-max mx-auto flex flex-col items-center">
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <label class="font-bold inline-block pb-2" for="text">Nome</label>
                <input bind:value={txtNome} required class="txtPrimaryComponent" type="text" name="text" placeholder="exemplo">
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="email">Email</label>
                <input bind:value={txtEmail} required class="txtPrimaryComponent" type="email" name="email" placeholder="exemplo@aedb.br">
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="password">Senha</label>
                <input bind:value={txtSenha} required class="txtPrimaryComponent" type="password" name="password" placeholder="******">
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="password">Confirmar Senha</label>
                <input required class="txtPrimaryComponent" type="password" name="password" placeholder="******">
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="text">Curso</label>
                <select bind:value={lstCurso} name="" id="" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary">
                    {#each cursos as curso}
                        <option value="{curso.id}">{curso.nome}</option>
                    {/each}
                </select>
            </div>
            <div>
                <button class="btnPrimaryComponent" on:click={criarUsuario}>
                    Cadastrar
                </button>
            </div>
            <div>
                <a href="login" class="font-bold text-content-primary">Já possui uma Conta?</a>
            </div>
        </div>        
    </div>
</div>