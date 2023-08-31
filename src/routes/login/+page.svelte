<script>
    import logo from '$lib/images/logoVazia.png';
</script>
<svelte:head>
	<title>SGTCC - Login</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center">
    <div class="h-max mx-auto flex flex-col items-center">
        <img class="h-[100px] w-auto" src="{logo}" alt="">
        <h1 class="text-xl font-bold text-center pb-10">Acesse com seu e-mail instrucional.</h1>
        <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm">
            <div>
                <label class="text-gray-600 font-bold inline-block pb-2" for="email">Email</label>
                <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="exemplo@aedb.br">
            </div>
            <div>
                <label class="text-gray-600 font-bold inline-block pb-2" for="password">Senha</label>
                <input class="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******">
            </div>
            <div class="flex">
                <div class="w-1/2">
                    <input type="checkbox" id="remeberMe">
                    <label for="remeberMe">Lembrar E-mail</label>
                </div>
                <div class="w-1/2">
                    <a class="font-bold text-blue-600" href="/">Esqueceu a senha?</a>
                </div>
            </div>
            <div>
                <input class="bg-primary w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]" type="submit" value="Login" >
            </div>
            <div>
                <p class="text-center">Faça o login usando sua conta.</p>
            </div>
            <div class="flex place-content-center">
                <button class="cursor-pointer hover:bg-[#eeeeee] rounded-xl">
                    <img src="https://www.google.com/favicon.ico" alt="Google Logo" class="">
                </button>
            </div>
        </div>        
    </div>
</div>