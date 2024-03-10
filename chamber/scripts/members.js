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
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let site = document.createElement("a");
        let membership = document.createElement("p");
        let stars = document.createElement("p");

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `image`); // fill in the blank
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        number.textContent = `${member.number}`;
        site.href = member.url;
        site.textContent = member.title;
        membership.textContent = `${member.membership}`;
        stars.textContent = `${member.stars}`;
        
        section.appendChild(image)
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(number);
        section.appendChild(site);
        section.appendChild(membership);
        section.appendChild(stars);
        card.appendChild(section);
    });
};



