function ClickOnDiv(div) {
    div.classList.add('disabled'); 
    div.onclick = null;

    var NewItem = div.cloneNode(true);
    NewItem.classList.remove('disabled');
    NewItem.onclick = function() {
        ClickOnDiv(NewItem);
    };

    document.body.appendChild(NewItem);
}