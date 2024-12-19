import { supabase } from "$lib/supabase";
import { json } from "@sveltejs/kit";

export const POST = async ({ request }) => {
    const { credential } = await request.json();
    const { data } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: credential,
    });
    return json(data);
};
