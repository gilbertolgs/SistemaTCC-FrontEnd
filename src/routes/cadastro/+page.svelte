<script lang="ts">
    let cursos = [
        {
            id: 1,
            nome: 'Sistemas de Informação'
        },
        {
            id: 2,
            nome: 'Administração'
        },
    ]
</script>

<svelte:head>
	<title>SGTCC - Cadastro</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center">
    <div class="h-max mx-auto flex flex-col items-center">
        <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <label class="text-gray-600 font-bold inline-block pb-2" for="text">Nome</label>
                <input required class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="text" placeholder="exemplo">
            </div>
            <div>
                <label class="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
                <input required class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="exemplo@aedb.br">
            </div>
            <div>
                <label class="text-gray-600 font-bold inline-block pb-2" for="password">Senha</label>
                <input required class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******">
            </div>
            <div>
                <label class="text-gray-600 font-bold inline-block pb-2" for="password">Confirmar Senha</label>
                <input required class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******">
            </div>
            <div>
                <label class="text-gray-600 font-bold inline-block pb-2" for="text">Curso</label>
                <select name="" id="">
                    {#each cursos as curso}
                        <option value="{curso.id}">{curso.nome}</option>
                    {/each}
                </select>
            </div>
            <div>
                <input class="bg-primary w-full py-2 rounded-md text-white font-bold cursor-pointer bg-blue-500 hover:bg-[#181196]" type="submit" value="Cadastrar" >
            </div>
            <div>
                <a href="/login" class="font-bold text-blue-600">Já possui uma Conta?</a>
            </div>
        </div>        
    </div>
</div>