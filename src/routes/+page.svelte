<script lang="ts">
    import { particlesInit } from "@tsparticles/svelte";
    import { onMount } from "svelte";
    import { loadSnowPreset } from "@tsparticles/preset-snow";
    import { Button } from "$lib/components/ui/button/index.js";
    import dayjs from "dayjs";
    import relativeTime from "dayjs/plugin/relativeTime";

    let { data } = $props();
    data.people.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    let ParticlesComponent: any = $state(() => {});
    onMount(async () => {
        const module = await import("@tsparticles/svelte");
        ParticlesComponent = module.default;
    });
    let particlesConfig = {
        background: {
            color: "#81a1c1",
        },
        preset: "snow",
    };
    void particlesInit(async (engine) => {
        await loadSnowPreset(engine);
    });

    dayjs.extend(relativeTime);
</script>

<ParticlesComponent options={particlesConfig} {particlesInit} class="fixed -z-10" />
<div class="mx-auto my-8 max-w-screen-lg rounded-xl bg-gray-100 p-4 shadow-lg sm:p-8">
    <div class="flex justify-between">
        <div class="flex-1"></div>
        <div class="flex flex-none flex-col items-center">
            <h1 class="mb-2 w-fit bg-gradient-to-r from-red-700 to-emerald-700 bg-clip-text text-4xl font-black text-transparent">Secret Santa</h1>
            <p class="mb-2 text-lg font-medium italic text-gray-800">The spirit of giving in our community</p>
            <p class="text-sm font-medium text-gray-800">By Group 22</p>
        </div>
        <div class="flex-1 text-right">
            {#if data.user}
                <a
                    href="/profile"
                    class="ml-auto flex w-fit items-center gap-2 rounded-full bg-emerald-600 p-2 pr-3 font-medium text-white ring-emerald-500/60 transition hover:bg-emerald-500 active:ring-4"
                >
                    <img src={data.user.user_metadata.avatar_url} alt="avatar" class="size-8 rounded-full" />
                    <p>Edit Profile</p>
                </a>
            {:else}
                <a
                    href="/login"
                    class="inline-block rounded bg-emerald-600 px-4 py-2 font-medium text-white ring-emerald-500/60 transition hover:bg-emerald-500 active:ring-4"
                    >Login</a
                >
            {/if}
        </div>
    </div>
    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {#each data.people as person}
            <div
                class="flex flex-col justify-between rounded bg-gray-200 p-6 shadow-md transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600/60"
            >
                <div>
                    <div class="mb-4 flex items-center gap-4">
                        <img
                            src="/avatar.png"
                            alt="User avatar"
                            class="size-10 rounded-full shadow-lg shadow-emerald-500/50 ring-2 ring-emerald-500 ring-offset-2"
                        />
                        <div>
                            <p class="text-lg font-bold">{person.name}</p>
                            <p>{person.age}, {person.gender}</p>
                        </div>
                    </div>
                    <p class="mb-4 font-semibold italic text-gray-700">“{person.well_wish}”</p>
                    <p>Requesting <span class="rounded bg-gray-300 px-1.5 py-0.5">{person.request}</span></p>
                </div>
                <p class="ml-auto mt-2 w-fit align-text-bottom text-sm text-gray-700">{dayjs().to(dayjs(person.created_at))}</p>
            </div>
        {/each}
    </div>
    <p class="mt-8 w-fit animate-spin">hi there</p>
</div>
