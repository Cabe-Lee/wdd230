const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "https://cabe-lee.github.io/wdd230/data/links.json";
const card = document.querySelector('#learningActivities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayWeek(data.lessons);
};
getLinks();


function displayWeek(lessons) {
    lessons.forEach((lesson) => {
        let section = document.createElement("section");
        let p = document.createElement("p");

        p.textContent = `${lesson.lesson}:`;

        section.appendChild(p);

        card.appendChild(section);
        // lessons.links.forEach((link) => {
        //     let a = document.createElement("a");

        //     a.textContent = `${link.title}`;
        //     a.href = `${link.url}`;
            
        //     section.appendChild(a);
        // });
    });
};
