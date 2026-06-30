import supabase from "./supabase"

export async function getContactDetails(formData) {
    if (!formData) return; // If formData does not exist return

    const { data, error } = await supabase
        .from('contact')
        .insert([formData])
        .select()

    if (error) {
        console.error(error.message)
        throw new Error(error.message)
    }

    return data ?? null
}