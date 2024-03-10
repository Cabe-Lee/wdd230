const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "https://cabe-lee.github.io/wdd230/chamber/data/members.json";
const card = document.querySelector('#members');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
};
getLinks();

function displayMembers(members) {
    members.forEach((member) => {
        let section = document.createElement("section");
        
        let image = document.createElement("img")
        let address = document.createElement("p");
        let number = document.createElement("p");
        let site = document.createElement("a");

        image.setAttribute('src', member.image);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
        address.textContent = `${member.address}`;
        number.textContent = `${member.number}`;
        site.href = member.url;
        site.textContent = member.title;
        
        section.appendChild(image)
        section.appendChild(address);
        section.appendChild(number);
        section.appendChild(site);
        card.appendChild(section);
    });
};



