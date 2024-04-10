const linksURL = "data/rental-data.json";

async function getJson() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    let data0 = data[0];
    displayRentals(data.rentals);
};
getJson();


const rentals = document.querySelector(".rentals");

function displayRentals(data) {
    
    data.forEach(list => {
        const tr = document.createElement("tr")
        let th0 = document.createElement("th");
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let th4 = document.createElement("th");
        let th5 = document.createElement("th");
        th0.innerHTML = list.name;
        th1.innerHTML = list.max;
        th2.innerHTML = list.halfRes;
        th3.innerHTML = list.fullRes;
        th4.innerHTML = list.halfWalkIn;
        th5.innerHTML = list.fullWalkIn;    
        tr.appendChild(th0);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        tr.appendChild(th4);
        tr.appendChild(th5);
        rentals.appendChild(tr);
    });
    
}; 