//your JS code here. If required.
let player1Name="",player2Name="",currentPlayer=0 ,isWinner=false
function onSubmit(){
	console.log("hi")
	let name1=document.getElementById("player-1").value;
	let name2=document.getElementById("player-2").value;
	console.log("hi",name1,name2);
	player1Name=name1;
	player2Name=name2;
	if(name1.length && name2.length){
		let divContainer = document.getElementsByClassName("container")[0];
		console.log(divContainer);
		divContainer.removeChild(document.getElementById("initialContainer"));
		
		let table = document.createElement("table");
		//table
		//table.style.border="1px solid black";
		table.style.width="300px";
		table.style.height="300px";
		table.border="1";
		table.style.borderCollapse="collapse"
		const data=[["","",""],["","",""],["","",""]];
		let c=0;
		data.forEach((el,index1)=>{
			const tr = document.createElement("tr");
			// tr.style.border="1px solid black";
			tr.border="2";
			el.forEach((el1,index)=>{
				const td = document.createElement("td");
				td.innerText = el1;
				td.border="2";
				td.id=c;
				td.style.cursor="pointer";
				td.style.height="100px";
				td.style.width="100px";
				td.style.background="pink"
				c++
				// tr.style.border="1px solid black";
				//document.addEventListener
				td.addEventListener("click",()=>{
					clickHandler(td.id);
				})
				tr.appendChild(td);
			})
			table.appendChild(tr)
		})
		const div = document.createElement("div");
		div.className="message";
		div.innerText=`${player1Name}, you're up`;
		div.style.fontWeight="bold";
		div.style.margin="5px"
		divContainer.appendChild(div)
		divContainer.appendChild(table)
	}
}
function clickHandler(id) {
  let td = document.getElementById(id);
  let innerText = td.innerText;
  if (innerText === "" && !isWinner) {
    if (currentPlayer) {
      td.innerText = 'O'
    } else {
      td.innerText = 'X'
    }
    let cell0 = document.getElementById("0").innerText
    let cell1 = document.getElementById("1").innerText
    let cell2 = document.getElementById("2").innerText
    let cell3 = document.getElementById("3").innerText
    let cell4 = document.getElementById("4").innerText
    let cell5 = document.getElementById("5").innerText
    let cell6 = document.getElementById("6").innerText
    let cell7 = document.getElementById("7").innerText
    let cell8 = document.getElementById("8").innerText;
    const obj = {
      0:cell0,
      1:cell1,
      2:cell2,
      3:cell3,
      4:cell4,
      5:cell5,
      6:cell6,
      7:cell7,
      8:cell8
    }
    var xCount = 0, oCount = 0;
    for(let i=0;i<3;i++){
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
      isWinner=true;
      return;
    }
    var xCount = 0, oCount = 0;
    for(let i=3;i<6;i++){
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
     isWinner=true;
     return;
   }
   var xCount = 0, oCount = 0;
    for(let i=6;i<9;i++){
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
     isWinner=true;
     return;
   }
   /////
   var xCount = 0, oCount = 0;
    for(let i=0;i<=6;i+=3){
       xCount += obj[i]=== "X" ? 1 : 0;
       oCount += obj[i]=== "O" ? 1 : 0;
    }
	  console.log(xCount,oCount);
    if (xCount === 3) {
      document.getElementsByClassName("message")[0].innerText = `${player1Name}, congratulations you won!`;
      isWinner=true;
      return;
    }
    if (oCount === 3) {
      document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
      isWinner=true;
      return;
    }
    var xCount = 0, oCount = 0;
    for(let i=1;i<=7;i+=3){
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
     isWinner=true;
     return;
   }
   if (oCount === 3) {
     document.getElementsByClassName("message")[0].innerText = `${player2Name}, congratulations you won!`;
     isWinner=true;
     return;
   }
   var xCount = 0, oCount = 0;
    for(let i=0;i<=8;i+=4){
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
     isWinner=true;
     return;
   }
   var xCount = 0, oCount = 0;
    for(let i=2;i<=6;i+=2){
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
     isWinner=true;
     return;
   }

 

   
    document.getElementsByClassName("message")[0].innerText = currentPlayer ? `${player1Name},you're up` : `${player2Name},you're up`
    currentPlayer = 1 - currentPlayer;
  }
}function clickHandler(id) {
  let td = document.getElementById(id);
  let innerText = td.innerText;
  if (innerText === "" && !isWinner) {
    if (currentPlayer) {
      td.innerText = 'O'
    } else {
      td.innerText = 'X'
    }
    let cell0 = document.getElementById("0").innerText
    let cell1 = document.getElementById("1").innerText
    let cell2 = document.getElementById("2").innerText
    let cell3 = document.getElementById("3").innerText
    let cell4 = document.getElementById("4").innerText
    let cell5 = document.getElementById("5").innerText
    let cell6 = document.getElementById("6").innerText
    let cell7 = document.getElementById("7").innerText
    let cell8 = document.getElementById("8").innerText;
    const obj = {
      0:cell0,
      1:cell1,
      2:cell2,
      3:cell3,
      4:cell4,
      5:cell5,
      6:cell6,
      7:cell7,
      8:cell8
    }
    var xCount = 0, oCount = 0;
    for(let i=0;i<3;i++){
       xCount += obj[i]=== "X" ? 1 : 0;
       oCount += obj[i]=== "O" ? 1 : 0;
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
    for(let i=3;i<6;i++){
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
    for(let i=6;i<9;i++){
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
    for(let i=0;i<=6;i+=3){
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
    for(let i=1;i<=7;i+=3){
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
    for(let i=2;i<=8;i+=3){
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
    for(let i=0;i<=8;i+=4){
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
    for(let i=2;i<=6;i+=2){
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
  for(let i=0;i<arr.length;i++){
    document.getElementById(i+"").style.background="purple"
  }
}

