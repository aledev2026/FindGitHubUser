const userSearchbox = document.getElementById('user-search');
const searchBtn = document.getElementById('search-btn');
const userInfoDiv = document.getElementById('user-info');

searchBtn.addEventListener('click', async () => {
    const username = userSearchbox.value.trim();
    if(username){
        try{
            const response = await fetch(`https://api.github.com/users/${username}`);
                if(!response.ok)
                {
                    throw new Error("Utente non trovato.");
                }
                const datiutente = await response.json();
                userInfoDiv.innerHTML = `
                <h2>${datiutente.name}</h2>
                <p>Login: ${datiutente.login}</p>
                <p>Followers: ${datiutente.followers}</p>
                <p>Following: ${datiutente.following}</p>`;
        } catch (errore){
            userInfoDiv.innerHTML =
                "<h2>USERNAME NON TROVATO.</h2>";
        }
    }
});