<script lang="ts">
    import { pageName, storeLogin } from "../stores";
    import Cookie from "$model/Cookie";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        Cookie.removeCookie("login");
        Cookie.removeCookie("email");
        Cookie.removeCookie("token");

        storeLogin.set(null);

        goto("/login");
    })
</script>
<svelte:head>
	<title>{pageName} - Logout</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary">
    saindo...
</div>