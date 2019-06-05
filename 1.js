// get elements
let paragraph = document.querySelector("#text");
let classModal = document.querySelector(".modal");
let span = document.querySelector("span");
let items = document.querySelectorAll(".grid-item");
// array to store values
let array = new Array(9);
// selected cell index
let indexCell;
// step in the game
let step = 0;


items.forEach( elem => {
	elem.onclick = function (event) {
		indexCell = parseInt(event.target.getAttribute("data-target"));
		// check for text in a modal
		if (!paragraph.innerHTML){
			// check if the cell is empty
			if (!this.innerHTML){
				if (step%2 === 0){
					this.innerHTML = 'x';
					array[indexCell] = 'x';

					if (step >= 4){ 
						if(checkGameOver(this.innerHTML)){
							printText("block", "Игра закончилась.Победил игрок под №1 ( x )");
							return
						}
					}
				}
				else{
					this.innerHTML = 'o';
					array[indexCell] = 'o';
					if (step >= 4){
						if(checkGameOver(this.innerHTML))
							printText("block", "Игра закончилась.Победил игрок №2 ( o )");
					}
				}
				step++;
			}
			if (step === 9)
				printText("block", "Игра закончилась.Ничья!!");
		}
	}
});
// function to check winning combinations
function checkGameOver (value) {
	if (array[0] == value && array[1] == value && array[2] == value)
		return true
	if (array[3] == value && array[4] == value && array[5] == value)
		return true
	if (array[6] == value && array[7] == value && array[8] == value)
		return true
	if (array[0] == value && array[3] == value && array[6] == value)
		return true
	if (array[1] == value && array[4] == value && array[7] == value)
		return true
	if (array[2] == value && array[5] == value && array[8] == value)
		return true
	if (array[0] == value && array[4] == value && array[8] == value)
		return true
	if (array[2] == value && array[4] == value && array[6] == value)
		return true
}
// function to print text in modal  
function printText (display = "none", text = "") {
	classModal.style.display = display;
	paragraph.innerHTML = text;
}
document.querySelector("span").onclick = function () {
	printText();
	location.reload();
}
window.onclick = function (event) {
	if ( event.target == classModal){
		printText();
		location.reload();
	}
}