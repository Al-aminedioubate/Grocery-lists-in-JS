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
//la fonction permettant d'effacer tous les items sur la liste
function deleteItms() {
	if (itemsList.children.length === 0) {
		//on verifie que la liste n'est pas vide avant de vider
		alert("Impossible de supprimer car la liste est vide!");
		return;
	}

	const confirmation = confirm("Êtes-vous sûr de vouloir supprimer tous les items ?");
	if (confirmation) {
		itemsList.innerHTML = "";
		alert("Vous avez supprimé les items de votre liste !");
	} else {
		alert("Suppression annulée.");
	}
}

//Evenement de suppression
deleteItems.addEventListener("click", deleteItms);
