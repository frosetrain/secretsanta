<script lang="ts">
    import Particles, { particlesInit } from "@tsparticles/svelte";
    import { onMount } from "svelte";
    import { loadSnowPreset } from "@tsparticles/preset-snow";
    import { Button } from "$lib/components/ui/button/index.js";

    let ParticlesComponent: any;
    onMount(async () => {
        const module = await import("@tsparticles/svelte");
        ParticlesComponent = module.default;
    });
    let particlesConfig = {
        background: {
            color: "#88c0d0",
        },
        preset: "snow",
    };

    void particlesInit(async (engine) => {
        await loadSnowPreset(engine);
    });
</script>

<svelte:component this={ParticlesComponent} options={particlesConfig} class="fixed -z-10" />
<div class="m-8 mx-auto max-w-screen-lg rounded-xl bg-white p-4 shadow-lg">
    <Button>Click me</Button>
</div>
