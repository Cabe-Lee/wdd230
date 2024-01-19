window.onload = function(){

    let year = new Date().getFullYear();

    document.getElementById("copyright").innerHTML = year + " ";

    const date = new Date(document.lastModified);
    document.getElementById("lastModified").innerHTML = date;
}

