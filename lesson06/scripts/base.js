const input = document.querySelector( "#favchap"  );
const button = document.querySelector( "button" );
const list = document.querySelector( "#list" );



button.addEventListener( "click", () => {
    if (input.value != "") {
        const li = document.createElement( "li" );
        const deleteButton = document.createElement( "button" );
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        list.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener( "click", function () {
            list.removeChild(li);
            list.removeChild(deleteButton);
            input.focus();
        });
        input.focus();
        input.value = "";
    };
});