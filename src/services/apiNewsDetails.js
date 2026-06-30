import supabase from "./supabase"

export async function getNewsById(id) {
    // Converting the id string to a Number Value using the Number function
    const numericId = Number(id);
    // Checking if there's no id or the numericId is not a number
    if (!id || Number.isNaN(numericId)) throw new Error("news ID is missing or invalid");

    //Destructuring the data returned from the API
    const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", numericId)
        .single();

    if (error) throw new Error(error.message);

    return data ?? null;
};



