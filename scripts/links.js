const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "data/links.json";
// const linksURL = "https://cabe-lee.github.io/data/links.json";
const card = document.querySelector('#learningActivities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
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
        p.textContent = week.lesson;

        console.log(week);

        let a = document.createElement("a");

        week.links.forEach((list, index) => {
            console.log(list);

        })
            
        //     a.href = list.url
        //     a.textContent = list.title;

        //     if (index > 0) {
        //         let separator = document.createElement('span');

        //         separator.textContent = ' | ';
        //         separator.appendChild(a);
        //         weekLesson.appendChild(separator);

        //     }  else {
        //         weekLesson.appendChild(a);
        //     }

        //     card.appendChild(p);
        //     card.appendChild(a);
        // });
    });
};