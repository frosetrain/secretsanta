import { supabase } from "$lib/supabase";

export async function load() {
    let user;
    supabase.auth.getSession().then((data) => {
        user = data.data.session?.user;
    });
    const { data } = await supabase.from("people").select();
    return {
        user: user ?? null,
        people: data ?? [],
    };
}
