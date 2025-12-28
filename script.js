//Declaration et initialisation de nos variable
let input = document.getElementById("inputItms");
let btn = document.getElementById("addBtn");

//Delete and items Liste section
let itemsList = document.getElementById("itmList");
let deleteItems = document.getElementById("clearItems");

//Section ajouter les items
btn.addEventListener("click", () => {
	addItems();
});

//fonction ajouter les items
function addItems() {
	if (input.value.trim() === " ") return;

	//creation d'items en list
	const li = document.createElement("li");
	li.textContent = input.value;

	//ajoutons nos element au parent ul
	itemsList.appendChild(li);

	//Remettons notre input vide
	input.value = "";
}

//Section clear items
deleteItems.addEventListener("click", () => {
	deleteItms();
});

function deleteItms() {
	console.log("items cleared");
}
