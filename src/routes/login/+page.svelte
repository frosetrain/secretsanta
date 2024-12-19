<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let mounted = false;
    let googleLoaded = false;

    onMount(() => {
        mounted = true;
        if (googleLoaded) {
            initializeGoogle();
        }
    });
    function googleLoad() {
        googleLoaded = true;
        if (mounted) {
            initializeGoogle();
        }
    }

    function initializeGoogle() {
        google.accounts.id.initialize({
            client_id: "848166196200-7fkkdcjpfkjognjku7psllp6t2g72kr8.apps.googleusercontent.com",
            callback: handleSignInWithGoogle,
        });
        google.accounts.id.renderButton(document.getElementById("loginButton"), { theme: "filled_blue", shape: "pill", size: "large" });
    }

    async function handleSignInWithGoogle(response) {
        await fetch("/login", {
            method: "POST",
            body: JSON.stringify({ credential: response.credential }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((data) => {
                return data.json();
            })
            .then(() => {
                goto("/");
            });
    }
</script>

<svelte:head>
    <meta name="referrer" content="origin" />
    <script src="https://accounts.google.com/gsi/client" async onload={googleLoad}></script>
</svelte:head>

<div class="grid h-dvh place-content-center">
    <div class="flex flex-col items-center gap-2">
        <div id="loginButton"></div>
        <a href="/" class="mb-4 block text-sm font-medium text-gray-600 underline">Back</a>
    </div>
</div>
