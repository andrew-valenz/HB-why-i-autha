import { checkAuth, fetchPosts, logout } from '../fetch-utils.js';

checkAuth();

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', async () => {
    await logout();
});
