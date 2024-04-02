const linksURL = "data/rental-data.json";

async function getJson() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayRentals(data);
};
getJson();

function displayRentals(data) {
    data.forEach(rental => {
        let tbody = querySelector(".tbody")

        let name = document.createElement("tr");
        // let max = document.querySelector(".max");
        // let halfRes = document.querySelector(".halfRes");
        // let fullRes = document.querySelector(".fullRes");
        // let halfWalkIn = document.querySelector(".halfWalk-In");
        // let fullWalkIn = document.querySelector(".fullWalk-In");
        
        name.textContent = rental.name;
        tbody.appendChild(name);
    });
        
};