//Declaration et initialisation de nos variable
let input = document.getElementById("inputItms");
let btn = document.getElementById("addBtn");

//Delete and items Liste section
let itemsList = document.getElementById("itmList");
let deleteItems = document.getElementById("clearItems");

//fonction ajouter les items
function addItems() {
	if (input.value.trim() === " ") return;

	//creation d'items en list
	const li = document.createElement("li");
	li.textContent = input.value;

	//ajoutons une icon supprimer sur chaque item
	const trash = document.createElement("i");
	trash.classList.add("fa-solid", "fa-trash", "delete-icon");

	//ajoutons notre icon sur la liste
	li.appendChild(trash);

	//Faisons une suppression individuelle
	trash.addEventListener("click", () => {
		li.remove();
		itemCount();
	});

	//ajoutons nos element au parent ul
	itemsList.appendChild(li);

	//appel de la fonction qui compte les items
	itemCount();

	//Remettons notre input vide
	input.value = "";
}

//Evenement ajouter les items
btn.addEventListener("click", () => {
	addItems();
});

//Creons une fonction permettant de compter le nombre items sur notre liste
function itemCount() {
	let totalItem = itemsList.children.length;
	document.getElementById("totalItem").textContent = `Total Items: ${totalItem}`;
}

//Section clear items
//la fonction permettant d'effacer tous les items sur la liste et verifier d'abord avant de supprimer et valide que la liste n'est pas vide car on peut pas vider une liste deja vide
function deleteItms() {
	if (itemsList.children.length === 0) {
		//on verifie si la liste contient des elements avant de vider
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

	//on l'appel ici pour faire une mise a jour du compte apres la suppression.
	itemCount();
}

//Evenement de suppression
deleteItems.addEventListener("click", deleteItms);

//itemCount();
