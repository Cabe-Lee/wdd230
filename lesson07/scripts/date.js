window.onload = function() {
    var time = document.getElementById("time");
    var now = new Date();
    var pastVisit = localStorage.getItem("lastVisit");
    var message = "";

    if (pastVisit === null) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        var past = new Date(pastVisit);
        var diff = Math.floor((now - past) / (1000 * 60 * 60 * 24));

        if (diff < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = "You last visited " + diff + " day" + (diff > 1 ? "s" : "") + " ago.";
        }
    }

    time.innerHTML = message;
    localStorage.setItem("lastVisit", now.toString());
}