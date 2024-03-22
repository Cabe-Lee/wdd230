const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "https://cabe-lee.github.io/wdd230/chamber/data/members.json";
const card = document.querySelector('.members');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
    // displayMemberHome(data.members);
};
getLinks();

function displayMembers(members) {
    members.forEach((member) => {
        let section = document.querySelector(".member-cards")
        
        let image = document.createElement("img");
        let name = document.createElement("h4");
        let membership = document.createElement("p");
        let site = document.createElement("a");

        image.setAttribute('src', member.image);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
        name.textContent = member.name;
        membership.textContent = member.membership;
        site.href = member.url;
        site.textContent = member.title;
        
        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(membership);
        section.appendChild(site);
        card.appendChild(section);
    });
};



let memberCard1 = document.querySelector("#memberCard1");
let logo1 = document.querySelector("#logo1");
let title1 = document.querySelector("#title1");
let membership1 = document.querySelector("#membership1");

let memberCard2 = document.querySelector("#memberCard2");
let logo2 = document.querySelector("#logo2");
let title2 = document.querySelector("#title2");
let membership2 = document.querySelector("#membership2");

let memberCard3 = document.querySelector("#memberCard3");
let title3 = document.querySelector("#title3");
let logo3 = document.querySelector("#logo3");
let membership3 = document.querySelector("#membership3");







// function displayMemberHome(members) {
//     title1.textContent = members[0].name;

// }