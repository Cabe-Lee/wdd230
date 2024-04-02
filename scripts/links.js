const baseURL = "https://cabe-lee.github.io/wdd230/";
const linksURL = "data/links.json";

const card = document.querySelector(".learningActivities");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
  displayWeek(data.lessons);
}
getLinks();

function displayWeek(lessons) {
  card.innerHTML = "";
  const ul = document.createElement("ul");

  lessons.forEach((week) => {
    let p = document.createElement("li");
    p.textContent = week.lesson;

    week.links.forEach((list) => {
      let a = document.createElement("a");
      a.setAttribute("href", list.url);
      a.innerHTML = list.title;
      
      p.appendChild(a);
      p.append(" | ");
    });

    ul.appendChild(p);
  });
  
  card.appendChild(ul);
}