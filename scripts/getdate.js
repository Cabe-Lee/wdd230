window.onload = function(){

    let year = new Date().getFullYear();
    const copyText = ("Ⓒ - Cabe - CA, USA");

    document.getElementById("copyright").innerHTML = copyText +' - ' + year;

    const date = new Date(document.lastModified);
    document.getElementById("lastModified").innerHTML = date;
}

