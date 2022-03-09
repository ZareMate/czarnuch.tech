const sites = document.getElementById("sites");
const searchBar = document.getElementById("searchBar");
let site = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredSites = site.filter((site) => {
    return site.name.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredSites);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("/js/sites.lib");
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
            <div class="characters, character"><div class="character">
                <h2><a class="btn-web" href="${character.a}">${character.name} <img src="${character.image}" width="25" height="25""></img></br><p class="desc">${character.desc}</p></a></h2>
            </div></div>  
        `;
    })
    .join("");
  sites.innerHTML = htmlString;
};

loadCharacters();
