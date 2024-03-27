const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "https://cabe-lee.github.io/wdd230/chamber/data/members.json";
const card = document.querySelector('.members');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members);
    displayMemberHome(data.members);
};
getLinks();

function displayMemberHome(members) {
    // let memberCard1 = document.querySelector("memberCard1");
    // let name1 = document.createElement("p");
    // name1.textContent = member.name;
    // memberCard1.appendChild(name1);
    let memberCard1 = document.querySelector("memberCard1");
    let name1 = document.createElement("p");
    let logo1 = document.querySelector("#logo1");
    let membership1 = document.querySelector("#membership1");
    let site1 = document.querySelector("#site1");

    let memberCard2 = document.querySelector("#memberCard2");
    let logo2 = document.querySelector("#logo2");
    let title2 = document.querySelector("#title2");
    let membership2 = document.querySelector("#membership2");
    let site2 = document.querySelector("#site2");

    let memberCard3 = document.querySelector("#memberCard3");
    let title3 = document.querySelector("#title3");
    let logo3 = document.querySelector("#logo3");
    let membership3 = document.querySelector("#membership3");
    let site3 = document.querySelector("#site3");

    logo1.setAttribute("src", members[6].image);
    logo1.setAttribute('loading', 'lazy');
    logo1.setAttribute('width', '100');
    logo1.setAttribute('height', '100');

    // name1.textContent = members.name;

    // memberCard1.appendChild(title1);
}