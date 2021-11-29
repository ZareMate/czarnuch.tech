const sites = document.getElementById('sites');
const searchBar = document.getElementById('searchBar');
let site = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredSites = site.filter((site) => {
        return (
            site.name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredSites);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('sites');
        site = await res.json();
        displayCharacters(site);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (site) => {
    const htmlString = site
        .map((character) => {
            return `
            <li class="character">
                <h2><a href="${character.a}">${character.name} <img src="${character.image}" width="25" height="25""></img></a></h2>  
            </li>
        `;
        })
        .join('');
    sites.innerHTML = htmlString;
};

loadCharacters();