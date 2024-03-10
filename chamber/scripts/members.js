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

let div = document.createElement("div");


let title = "Bob is great."
let url = "https://google.com"

a.href = url;
a.textContent = title;
        
div.appendChild(a);


function displayMembers(members) {
    members.forEach((member) => {
        let section = document.createElement("section");
        
        let name = document.createElement("p");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let link = document.createElement("a");
        let membership = document.createElement("p");
        let stars = document.createElement("p");

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        number.textContent = `${member.number}`;
        link.href = link.url;
        link.textContent = link.text;
        membership.textContent = `${member.membership}`;
        stars.textContent = `${member.stars}`;
        
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(number);
        section.appendChild(link);
        section.appendChild(membership);
        section.appendChild(stars);
        card.appendChild(section);
    });
};



