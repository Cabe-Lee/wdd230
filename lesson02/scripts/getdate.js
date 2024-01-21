document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("date").innerHTML = new Date().toLocaleDateString('en-US');
document.getElementById("hour").innerHTML = new Date().toLocaleTimeString('eo', { hour12: false });