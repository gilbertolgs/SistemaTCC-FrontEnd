<script>
    import { pageName } from '../stores';
    
    import logo from '$lib/images/logoVazia.png';
</script>
<svelte:head>
	<title>{pageName} - Login</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary">
    <div class="h-max mx-auto flex flex-col items-center">
        <img class="h-[100px] w-auto" src="{logo}" alt="">
        <h1 class="text-xl font-bold text-center pb-10">Acesse com seu e-mail instrucional.</h1>
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm">
            <div>
                <label class="font-bold inline-block pb-2" for="email">Email</label>
                <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="exemplo@aedb.br">
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="password">Senha</label>
                <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******">
            </div>
            <div class="flex">
                <div class="w-1/2">
                    <input type="checkbox" id="remeberMe">
                    <label for="remeberMe">Lembrar E-mail</label>
                </div>
                <div class="w-1/2">
                    <a class="font-bold text-content-primary" href="/">Esqueceu a senha?</a>
                </div>
            </div>
            <div>
                <input class="w-full py-2 rounded-md text-white font-bold cursor-pointer bg-content-primary hover:brightness-90" type="submit" value="Login" >
            </div>
            <div>
                <a href="cadastro" class="font-bold text-content-primary">Criar Conta</a>
            </div>
        </div>        
    </div>
</div>