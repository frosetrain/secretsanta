import type { Actions } from "./$types";
import { supabase } from "$lib/supabase";
import { redirect } from "@sveltejs/kit";

export const actions = {
    default: async ({ request }) => {
        let user;
        supabase.auth.getSession().then((data) => {
            user = data.data.session?.user;
        });
        const inputs = await request.formData();
        console.log(inputs);
        const { data, error } = await supabase.from("people").insert({
            name: inputs.get("name"),
            age: Number(inputs.get("age")),
            gender: inputs.get("gender") === "male" ? "M" : "F",
            well_wish: inputs.get("wellWishes"),
            request: inputs.get("request"),
            request_price: Number(inputs.get("requestPrice")),
            giving: Number(inputs.get("giving")),
            user_id: user.id,
        });
        console.log(data, error);
        redirect(303, "/");
        return { success: true };
    },
} satisfies Actions;
