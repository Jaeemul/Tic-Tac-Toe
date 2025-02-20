const boxes = document.querySelectorAll(".box")
const reset = document.getElementById("reset-btn")

// console.log(boxes)
let isX=false;
let arrbox = [];
let boxesChecked = [];
let winner = false;
let playerLastSpot = 0;
let winnerOrNot ="";
const players = ["X","O"];

const gameLogic =(arr, spot)=>{
    //horizontal
    if(arr[0]==arr[1] && arr[1]==arr[2] && typeof(arr[0])=="string" || arr[3]==arr[4] && arr[4]==arr[5] && typeof(arr[3])=="string" || arr[6]==arr[7] && arr[7]==arr[8] && typeof(arr[6])=="string" ){
        return arr[spot];
    }
    //vertical
    else if((arr[0]==arr[3] && arr[3]==arr[6]) && typeof(arr[0])=="string" || (arr[1]==arr[4] && arr[4]==arr[7]) && typeof(arr[1])=="string" || (arr[2]==arr[5] && arr[5]==arr[8]) && typeof(arr[2])=="string" ){
        return arr[spot];
    }
    //diagonal
    else if(arr[0]==arr[4] && arr[4]==arr[8] && typeof(arr[0])=="string" || arr[2]==arr[4] && arr[4]==arr[6] && typeof(arr[6])=="string" ){
        return arr[spot];
    }else{
        return "none";
    }  
}

if(winner == false){
    playGame();
}

function playGame () {
    boxes.forEach((box, index)=>{ 
        box.addEventListener("click", ()=>{
            if(winner == true){
                return;
            }
            box.value = false
            console.log(box.value)
            if(!isX && box.textContent == "" && box.value==false){
                box.value = true;
                box.textContent="X"
                box.className +=" text-7xl flex justify-center items-center"
                // console.log(index)
                arrbox[index]=box.textContent;
                isX = true;
                console.log(arrbox)
                boxesChecked.push("X")
                playerLastSpot = index;
            }else if(isX && box.textContent == "" && box.value==false){
                box.value = true;
                box.textContent="O";
                box.className +=" text-7xl flex justify-center items-center"
                arrbox[index]=box.textContent;
                isX = false;
                console.log(arrbox)
                boxesChecked.push("O")
                playerLastSpot = index
            }
            console.log(box.value)
            winnerOrNot = gameLogic(arrbox, playerLastSpot);
  
            if(winnerOrNot == "X"){
                alert("X is the winner");
                winner = true;
            }else if(winnerOrNot == "O"){
                alert("O is the winner");
                winner = true;
            }
            else if(winnerOrNot == "none" && boxesChecked.length==9){
                alert("It's a tie !!!");
                winner = true;   
            }
        })  
    })
}

const resetGame = () =>{
    boxes.forEach(box=>{
        box.textContent ="";
        arrbox = [] 
        boxesChecked=[]
        winner = false;
    })
}

reset.addEventListener("click", resetGame)
