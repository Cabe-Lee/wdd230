const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "data/links.json";
// const linksURL = "https://cabe-lee.github.io/data/links.json";
const card = document.querySelector('#learningActivities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayWeek(data.lessons);
};
getLinks();

// Template to links to display on HTML.

// let once = document.querySelector("#once");
// let a = document.createElement("a");
// a.href = "https://google.com";
// a.textContent = "Google";
// once.appendChild(a);



function displayWeek(lessons) {
    lessons.forEach((week) => {
        let p = document.createElement("p");
        p.textContent = `${week.lesson}:`;
        
        let a = document.createElement("a");
        let weeks = week.links[0];
        a.href = weeks.url;
        a.textContent = weeks.title;
        
        card.appendChild(p);
        card.appendChild(a);
    });
};