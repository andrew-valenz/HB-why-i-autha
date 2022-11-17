// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logOutButton = document.getElementById('logout');

logOutButton.addEventListener('click', async () => {
    await logout();
});

// window.addEventListener('load', async () => {
//     const posts = await fetchPosts();
//     console.log(posts, 'posts');
// });
