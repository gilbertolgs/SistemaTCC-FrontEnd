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
                console.log(error);
                
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
                user.papel,
                null,
                login.token
            );
            
            storeLogin.set(saveCookieUser);
            salvarCookie(login, saveCookieUser);
            goto('/biblioteca');
        }
    }

    function fazerLoginKeyPress(event : KeyboardEvent){
        if(event.key == 'Enter'){
            fazerLogin();
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
    // console.log(Cookie.getCookie("email"));
    // console.log(Cookie.getCookie("token"));
</script>
<svelte:head>
	<title>{pageName} - Login</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary w-full">
    <div class="h-max mx-auto flex flex-col items-center lg:w-1/2 w-full">
        <img class="h-[100px] w-auto" src="{logo}" alt="">
        <h1 class="text-xl font-bold text-center pb-10">Acesse com seu e-mail instrucional.</h1>
        <div class="bg-base-100 shadow-xl p-10 flex flex-col gap-4 text-sm">
            <div class="flex flex-col">
                <label class="font-bold pb-2" for="email">Email</label>
                <input class="input input-bordered" type="email" name="email" placeholder="exemplo@aedb.br" bind:value={email} on:keypress={fazerLoginKeyPress}>
            </div>
            <div class="flex flex-col">
                <label class="font-bold pb-2" for="password">Senha</label>
                <input class="input input-bordered" type="password" name="password" placeholder="******" bind:value={senha} on:keypress={fazerLoginKeyPress}>
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
                <input class="btn btn-primary" type="submit" value="Login" on:click={fazerLogin}>
            </div>
            <div>
                <a href="cadastro" class="font-bold text-content-primary">Criar Conta</a>
            </div>
        </div>        
    </div>
</div>