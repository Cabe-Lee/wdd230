const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "https://cabe-lee.github.io/wdd230/data/links.json";
let activites = document.querySelector('#learningActivities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lessons);
    displayLinks(data);
};

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const activites = document.createElement("p")
        // Build the h2 content out to show the prophet's full name
        activites.textContent = `${week.lesson}: ${week.links}`; // fill in the blank
        // Build the image portrait by setting all the relevant attributes
        board.setAttribute('alt', `Learning Activities`); // fill in the blank
        board.setAttribute('loading', 'lazy');
    
        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
    });
};