import { supabase } from "$lib/supabase";
import { json } from "@sveltejs/kit";

export const POST = async () => {
    await supabase.auth.signOut();
    return json("amonkus");
};
