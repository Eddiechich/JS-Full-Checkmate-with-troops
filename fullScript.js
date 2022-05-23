let container = document.createElement("div");
container.setAttribute("id" , "container");
document.body.appendChild(container);

let container2 = document.createElement("div");
container2.setAttribute("id" , "container2");
document.body.appendChild(container2);

let pionContainer = document.createElement("div");
pionContainer.setAttribute("id" , "pionContainer");
document.body.appendChild(pionContainer);

let pionContainer2 = document.createElement("div");
pionContainer2.setAttribute("id" , "pionContainer2");
document.body.appendChild(pionContainer2);

let blacks = document.createElement("div");
blacks.setAttribute("id" , "blacks");
document.body.appendChild(blacks);

let whites = document.createElement("div");
whites.setAttribute("id" , "whites");
document.body.appendChild(whites);

let columnLetters = ["A","B","C","D","E","F","G","H"];

let pion = "♟";
let blackSoldiers = ["♜","♞","♝","♛","♚","♝","♞","♜"];
let whitePion = "♙";
let whiteSoldiers = ["♖","♘","♗","♕","♔","♗","♘","♖"];

for (let i = 0; i < 8; i++){
    let blacksColumn = document.createElement("div");
    blacksColumn.setAttribute("class" , "blackColumn");
    blacks.appendChild(blacksColumn); 
    blacksColumn.innerText = blackSoldiers[i];
}
for (let i = 0; i < 8; i++){
    let whitesColumn = document.createElement("div");
    whitesColumn.setAttribute("class" , "whitesColumn");
    whites.appendChild(whitesColumn); 
    whitesColumn.innerText = whiteSoldiers[i];
}
for (let i = 0; i < 8; i++) {
    let column = document.createElement("div");
    column.setAttribute("class" , "column");
    container.appendChild(column); 
    column.innerText = columnLetters[i];
}
for (let i = 1; i < 9; i++) {
    let row = document.createElement("div");
    row.setAttribute("class" , "row");
    container2.appendChild(row); 
    row.innerText = i;  
}
for (let i = 1; i < 9; i++) {
    let pionColumn = document.createElement("div");
    pionColumn.setAttribute("class" , "pionColumn");
    pionContainer2.appendChild(pionColumn); 
    pionColumn.innerText = whitePion;  
}
for (let i = 1; i < 9; i++) {
    let pionRow = document.createElement("div");
    pionRow.setAttribute("class" , "pionRow");
    pionContainer.appendChild(pionRow); 
    pionRow.innerText = pion;  
}
for (let i = 0; i < 8 ; i++) {
    let board = document.createElement("div");
    board.className = "board";
    document.body.appendChild(board);
    for (let j = 4; j < 8; j++) {
      let box = document.createElement("div");
      if (i % 2 === 0) {
        box.className = "white";
        board.appendChild(box);
      } else {
        box.className = "black";
        board.appendChild(box);
        }
        box = document.createElement("div");
        if (i % 2 === 0) {
          box.className = "black";
          board.appendChild(box);
          } else {
          box.className = "white";
          board.appendChild(box);
      }
    
    }
  }

 // this is a bookmark so i wont ruin every thing 😁
 // this is a bookmark so i wont ruin every thing 😁