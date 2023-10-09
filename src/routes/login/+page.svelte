<script lang="ts">
    import { pageName, storeLogin } from '../stores';
    import Api from '$repository/axiosInstance';
    import Cookie from '$model/Cookie';
    import logo from '$lib/images/logoVazia.png';
    import { goto } from '$app/navigation';
    import User from '$model/User';

    let email: string;
    let senha: string;

    async function fazerLogin(){
        if(email == undefined || email.includes('@aedb.br') == false){
            alert('E-mail inválido');
        }
        else if(senha == undefined){
            alert('Senha inválida');
        }
        else{
            const login: any = await Api.put('usuarios/login', {email, senha}).catch(error => {
                if(error.response.status == 401){
                    alert('E-mail ou senha inválidos');
                }
            });
            
            const user = await Api.get('usuarios/email', {email : login.email})
            
            const saveCookieUser = new User(
                user.id,
                user.idCurso,
                user.nome,
                login.email,
                '',
                user.idCurso,
                user.papel,
                login.token
            );
            
            storeLogin.set(saveCookieUser);
            salvarCookie(login, saveCookieUser);
            goto('/biblioteca');
        }
    }

    function salvarCookie(login: any, user: any) {
        const daysToExpire=2;
        const expirationDate=new Date();
        expirationDate.setDate(expirationDate.getDate()+daysToExpire);
        
        Cookie.setCookie("email",login.email,expirationDate);
        Cookie.setCookie("token",login.token,expirationDate);

        Cookie.setCookie("login", JSON.stringify(user), expirationDate);
    }

    console.log(Cookie.getCookie("email"));
    console.log(Cookie.getCookie("token"));


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
                <input class="border border-gray-400 text-black focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="email" name="email" placeholder="exemplo@aedb.br" bind:value={email}>
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="password">Senha</label>
                <input class="border border-gray-400 text-black focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="password" placeholder="******" bind:value={senha}>
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
                <input class="w-full py-2 rounded-md text-white font-bold cursor-pointer bg-content-primary hover:brightness-90" type="submit" value="Login" on:click={fazerLogin}>
            </div>
            <div>
                <a href="cadastro" class="font-bold text-content-primary">Criar Conta</a>
            </div>
        </div>        
    </div>
</div>