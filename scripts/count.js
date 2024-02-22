const visitsDisplay = document.querySelector(".visit");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const text = "Visits: "

if (numVisits != 0) {
    visitsDisplay.textContent = text + numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);