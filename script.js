//your JS code here. If required.
let player1Name="",player2Name="",currentPlayer=0 ,isWinner=false
function onSubmit() {
  let name1 = document.getElementById("player-1").value;
  let name2 = document.getElementById("player-2").value;
  player1Name = name1;
  player2Name = name2;
  if (name1.length && name2.length) {
    let divContainer = document.getElementsByClassName("container")[0];
    console.log(divContainer);
    divContainer.removeChild(document.getElementById("player-1"));
    divContainer.removeChild(document.getElementById("player-2"));
    divContainer.removeChild(document.getElementById("submit"));
    
    const div = document.getElementsByClassName("message")[0];
    div.innerText = `${player1Name}, you're up`;
	const  board =  document.getElementsByClassName("board")[0];
	  board.style.display="flex"
	
    
  }
}
function clickHandler(id) {
  let td = document.getElementById(id);
  let innerText = td.innerText;
  if (innerText === "" && !isWinner) {
    if (currentPlayer) {
      td.innerText = 'o'
    } else {
      td.innerText = 'x'
    }
    // let cell0 = document.getElementById("0").innerText
    let cell1 = document.getElementById("1").innerText
    let cell2 = document.getElementById("2").innerText
    let cell3 = document.getElementById("3").innerText
    let cell4 = document.getElementById("4").innerText
    let cell5 = document.getElementById("5").innerText
    let cell6 = document.getElementById("6").innerText
    let cell7 = document.getElementById("7").innerText
    let cell8 = document.getElementById("8").innerText;
    let cell9 = document.getElementById("9").innerText;
    const obj = {
      // 0:cell0,
      1:cell1,
      2:cell2,
      3:cell3,
      4:cell4,
      5:cell5,
      6:cell6,
      7:cell7,
      8:cell8,
      9:cell9
    }
    var xCount = 0, oCount = 0;
    for(let i=1;i<4;i++){
       xCount += obj[i]=== "x" ? 1 : 0;
       oCount += obj[i]=== "o" ? 1 : 0;
    }
    if (xCount === 3) {
      document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
      givebackgroundColor([0,1,2])
      isWinner=true;
      return;
    }
    if (oCount === 3) {
      document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
      givebackgroundColor([0,1,2])
      isWinner=true;
      return;
    }
    var xCount = 0, oCount = 0;
    for(let i=4;i<=6;i++){
      xCount += obj[i]=== "X" ? 1 : 0;
      oCount += obj[i]=== "O" ? 1 : 0;
   }
   if (xCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
     givebackgroundColor([3,4,5])
     isWinner=true;
     return;
   }
   if (oCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
     givebackgroundColor([3,4,5])
     isWinner=true;
     return;
   }
   var xCount = 0, oCount = 0;
    for(let i=7;i<=9;i++){
      xCount += obj[i]=== "X" ? 1 : 0;
      oCount += obj[i]=== "O" ? 1 : 0;
   }
   if (xCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
     
     
     isWinner=true;
     return;
   }
   if (oCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
     givebackgroundColor([6,7,8])
     isWinner=true;
     return;
   }
   /////
   var xCount = 0, oCount = 0;
    for(let i=1;i<=7;i+=3){
       xCount += obj[i]=== "X" ? 1 : 0;
       oCount += obj[i]=== "O" ? 1 : 0;
    }
	  console.log(xCount,oCount);
    if (xCount === 3) {
      document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
      givebackgroundColor([0,3,6])
      isWinner=true;
      return;
    }
    if (oCount === 3) {
      document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
      givebackgroundColor([0,3,6])
      isWinner=true;
      return;
    }
    var xCount = 0, oCount = 0;
    for(let i=2;i<=8;i+=3){
      xCount += obj[i]=== "X" ? 1 : 0;
      oCount += obj[i]=== "O" ? 1 : 0;
   }
   if (xCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
     givebackgroundColor([1,4,7])
     isWinner=true;
     return;
   }
   if (oCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
     givebackgroundColor([1,4,7])
     isWinner=true;
     return;
   }
   var xCount = 0, oCount = 0;
    for(let i=3;i<=9;i+=3){
      xCount += obj[i]=== "X" ? 1 : 0;
      oCount += obj[i]=== "O" ? 1 : 0;
   }
   if (xCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
     givebackgroundColor([2,5,8])
     isWinner=true;
     return;
   }
   if (oCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
     givebackgroundColor([2,5,8])
     isWinner=true;
     return;
   }
   var xCount = 0, oCount = 0;
    for(let i=1;i<=9;i+=4){
      xCount += obj[i]=== "X" ? 1 : 0;
      oCount += obj[i]=== "O" ? 1 : 0;
   }
   if (xCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
     givebackgroundColor([0,4,8])
     isWinner=true;
     return;
   }
   if (oCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
     givebackgroundColor([0,4,8])
     isWinner=true;
     return;
   }
   var xCount = 0, oCount = 0;
    for(let i=3;i<=7;i+=2){
      xCount += obj[i]=== "X" ? 1 : 0;
      oCount += obj[i]=== "O" ? 1 : 0;
   }
   if (xCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
     givebackgroundColor([2,4,6])
     isWinner=true;
     return;
   }
   if (oCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
     givebackgroundColor([2,4,6])
     isWinner=true;
     return;
   }

    document.getElementsByClassName("message")[0].innerText = currentPlayer ? `${player1Name},you're up` : `${player2Name},you're up`
    currentPlayer = 1 - currentPlayer;
  }
}
function givebackgroundColor(arr){
	console.log(arr)
  for(let i=0;i<arr.length;i++){
    document.getElementById((arr[i]+1)+"").style.background="purple"
  }
}

