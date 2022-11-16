// Enter Supabase Information
const SUPABASE_URL = 'https://runrnxgdrbkaytuydcss.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnJueGdkcmJrYXl0dXlkY3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMDAsImV4cCI6MTk4MzY4NDAwMH0.eTaenRCbb6KMg82PtWyN6Md7lu-lSFCxPx-a9-y8WJw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    console.log('client', client.auth.session());
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace('/');
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    console.log('response', response);
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function checkAuth() {
    const user = getUser();
    if (!user) location.replace('/');
}

export async function redirectIfLoggedIn() {
    const user = getUser();
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}
