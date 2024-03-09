const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "https://cabe-lee.github.io/wdd230/data/members.json";
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
        let name = document.createElement("p");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let urls = document.createElement("a");
        let image = document.createElement("img");
        let membership = document.createElement("p");
        let stars = document.createElement("p");

        name.textContent = `${member.name}:`;
        address.textContent = `${member.address}:`;
        number.textContent = `${member.number}:`;
        urls.textContent = `${member.urls}:`;
        image.textContent = `${member.image}:`;
        membership.textContent = `${member.membership}:`;
        stars.textContent = `${member.stars}:`;
        
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(number);
        section.appendChild(urls);
        section.appendChild(image);
        section.appendChild(membership);
        section.appendChild(stars);

        card.appendChild(section);
    });
};
