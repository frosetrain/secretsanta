<script lang="ts">
    import { goto } from "$app/navigation";

    async function signOut() {
        await fetch("/profile", {
            method: "POST",
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

<div class="m-8">
    <a href="/" class="block font-bold text-emerald-700 underline">Back</a>
    <button
        onclick={signOut}
        class="my-4 rounded-md bg-red-700 px-4 py-2 font-bold text-white ring-red-500/50 transition hover:bg-red-800 active:ring-4">Sign out</button
    >
    <h1 class="text-2xl font-bold">Set your Secret Santa profile</h1>
    <form class="mt-8 max-w-sm">
        <div class="mb-5">
            <label for="email" class="mb-2 block text-sm font-medium text-gray-900">Name</label>
            <input
                type="email"
                id="email"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="name@flowbite.com"
                required
            />
        </div>
        <button
            type="submit"
            class="w-full rounded-md bg-emerald-700 px-4 py-2 text-center text-sm font-medium text-white ring-emerald-300 transition hover:bg-emerald-800 active:ring-4 sm:w-auto"
            >Submit</button
        >
    </form>
</div>
