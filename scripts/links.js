const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "https://cabe-lee.github.io/wdd230/data/links.json";
const card = document.querySelector('#learningActivities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayWeek(data.lessons);
    // displayLinks(data.links);
};
getLinks();


function displayWeek(lessons) {
    lessons.forEach((lesson) => {
        let section = document.createElement("section");
        let p = document.createElement("p");
        let a = document.createElement("a");
        
        p.textContent = `${lesson.lesson}:`;
        a.href = lesson.url1;
        a.href = lesson.url2;
        a.href = lesson.url3;
        a.textContent = lesson.title1;
        a.textContent = lesson.title2;
        a.textContent = lesson.title3;

        section.appendChild(p);
        section.appendChild(a);
        card.appendChild(section);
    });
};

// function displayLinks(links) {
//         links.forEach(link => {
//             let section = document.createElement("section");
//             let a = document.createElement("a");
            
//             a.href = link.url;
//             a.textContent = link.title;

//             section.appendChild(a);
//             card.appendChild(section);
//         });
// }
