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
    <h1 class="text-2xl font-bold">Hi! fill up this form for us to know more about you :D</h1>
    <form method="POST">
        <label for="name">Name:</label>
        <input id="name" name="name" type="text" class="my-2" required /><br />
        <label for="age">Age:</label>
        <input id="age" name="age" type="number" class="my-2" required /><br />
        <p>Gender:</p>
        <input type="radio" name="gender" value="male" id="male" required />
        <label for="male">Male</label><br />
        <input type="radio" name="gender" value="female" id="female" required />
        <label for="female">Female</label><br />
        <label class="mt-2 block" for="wellWishes">Enter your well wishes:</label>
        <input id="wellWishes" name="wellWishes" required /><br />
        <label for="request" class="mt-2 block">What gift do you want?</label>
        <input id="request" name="request" required /><br />
        <label for="requestPrice" class="mt-2 block">How much does that gift cost?</label>
        <span>$</span><input id="requestPrice" type="number" name="requestPrice" required /><br />
        <label for="giving">How much are you willing to give back in return?</label><br />
        <span>$</span><input id="giving" type="number" name="giving" required /><br />
        <input
            type="submit"
            value="Submit"
            class="my-4 rounded-md bg-emerald-700 px-4 py-2 font-bold text-white ring-emerald-500/50 transition hover:bg-emerald-800"
        />
    </form>
</div>
