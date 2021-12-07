console.log("Wlecome to the Game");
const gameover=new Audio("gameover.mp3")
const turnmusic= new Audio("ting.mp3");
var gamewon=false;
var turn="X";

function changeturn(){
  if(turn==="X")
  return "O";
  else return "X";
}
function checkwin(){
    let boxtext=document.getElementsByClassName("boxtext");
let wins=[
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
      {
        document.querySelector(".turninfo").innerHTML=turn+" won";
        gamewon=true;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
        gameover.play();
        document.querySelector(".line").style.width="20vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      }

})

}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener("click",()=>{
       if(boxtext.innerHTML==="")
       boxtext.innerHTML=turn;
       turnmusic.play();
       checkwin();
       turn=changeturn();
       if(!gamewon)
      document.getElementsByClassName("turninfo")[0].innerHTML="current turn - "+turn;
  
    })
});

reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
});
   gamewon=false;
   turn="X";
    document.getElementsByClassName("turninfo")[0].innerHTML="current turn - X";
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width="0vw";
})
