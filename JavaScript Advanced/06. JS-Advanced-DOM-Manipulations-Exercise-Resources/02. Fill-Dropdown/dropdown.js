function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    let select = document.getElementById("menu");
    var el = document.createElement("option");
    el.textContent = text;
    el.value = value;
    select.appendChild(el);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}