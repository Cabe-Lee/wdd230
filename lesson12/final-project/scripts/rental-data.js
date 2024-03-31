const linksURL = "data/rental-data.json";
// const linksURL = "https://cabe-lee.github.io/wdd230/lesson12/final-project/data/rental-data.json";

async function getJson() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayRentals(data);
};
getJson();

function displayRentals(data) {
    data.forEach(rental => {
        let tr = querySelector(".tr")

        let name = document.createElement("th");
        // let max = document.querySelector(".max");
        // let halfRes = document.querySelector(".halfRes");
        // let fullRes = document.querySelector(".fullRes");
        // let halfWalkIn = document.querySelector(".halfWalk-In");
        // let fullWalkIn = document.querySelector(".fullWalk-In");
        
        name.textContent = rental.name;
        tr.appendChild(name);
    });
        
};

// Fetch the JSON data (replace 'your-json-file.json' with the actual file path)
// Try this out when your done with your break.
// fetch('your-json-file.json')
//     .then(response => response.json())
//     .then(data => {
//         const tableBody = document.querySelector('#employee-table tbody');
//         data.forEach(employee => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${employee.id}</td>
//                 <td>${employee.name}</td>
//                 <td>${employee.age}</td>
//             `;
//             tableBody.appendChild(row);
//         });
//     })
//     .catch(error => console.error('Error fetching data:', error));