const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwd2Z1YXF2d2x6cnRwYXV1Z290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5Njg3MTAsImV4cCI6MTk2MzU0NDcxMH0.sUI1TaJk5GE34Q06B2tduC38-RG8NO-HoqJhGa4wrhg';

const SUPABASE_URL = 'https://cpwfuaqvwlzrtpauugot.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getItems(){
    const response = await client
        .from('shopping_lists')
        .select('*');

    return response.body;
}

export async function createItems(item){
    const response = await client
        .from('shopping_lists')
        .insert({
            item: item.item,
            quantity: item.quantity,
            is_bought: false
        })
        .single();

    return response.body;
}

export async function itemBought(id){
    const response = await client
        .from('shopping_lists')
        .update({ is_bought: true })
        .match({ id });

    return response;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./shopping-list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function deleteItem(id){
    const response = await client   
        .from('shopping_lists')
        .delete()
        .match({ user_id: client.auth.user().id });

    return response;
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
