let containerFirst=document.querySelectorAll('.container2');
function startbutton(){
containerFirst[0].style.display='block';
document.querySelectorAll('.container')[0].style.display='none';
}
let quitButton=document.getElementById('quit').addEventListener('click',function(){
containerFirst[0].style.display='none';
document.querySelectorAll('.container')[0].style.display='block';
myBox.style.display='none';
})
let reStartButton=document.getElementById('restart').addEventListener('click',function(){
    myBox.style.display='none';
})
const humanChoice=['You Choose Scissor','You Choose Paper','You Choose Rock']
const computerChoice=['Computer Choose Scissor','Computer Choose Paper','Computer Choose Rock']
const finalOutput=['Congratulation You Won !','Oops You Lost !','Game Draw ! Try Again']
let useP3=document.getElementById('p3');
var usep4=document.getElementById('p4');
var usep6=document.getElementById('p6');
let myBox=document.getElementsByClassName('box')[0];
function scissor(){
    useP3.innerHTML=humanChoice[0];
    myBox.style.display='block';
    let applyCondition=Math.floor(Math.random()*3);
    switch(applyCondition){
        case 0:
            usep4.innerHTML=computerChoice[0];
            usep6.innerHTML=finalOutput[2];
            break;
case 1:
    usep4.innerHTML=computerChoice[1];
    usep6.innerHTML=finalOutput[0];
    break;
    case 2:
        usep4.innerHTML=computerChoice[2];
        usep6.innerHTML=finalOutput[1];
        break;
    }
}
function Paper(){
    myBox.style.display='block';
    useP3.innerHTML=humanChoice[1];
    useP3.style.color='orangered';
    usep6.style.color='red';
    let paperCondition=Math.floor(Math.random()*3)
    switch(paperCondition){
        case 0:
            usep4.innerHTML=computerChoice[0];
            usep6.innerHTML=finalOutput[1];
            break;
case 1:
    usep4.innerHTML=computerChoice[1];
    usep6.innerHTML=finalOutput[2];
    break;
    case 2:
        usep4.innerHTML=computerChoice[2];
        usep6.innerHTML=finalOutput[0];
        break;
    }
}
function Rock(){
    myBox.style.display='block';
    useP3.innerHTML=humanChoice[2];
    useP3.style.color='red';
    usep6.style.color='orangered';
    let RockCondition=Math.floor(Math.random()*3)
    switch(RockCondition){
        case 0:
            usep4.innerHTML=computerChoice[0];
            usep6.innerHTML=finalOutput[0];
            break;
case 1:
    usep4.innerHTML=computerChoice[1];
    usep6.innerHTML=finalOutput[1];
    break;
    case 2:
        usep4.innerHTML=computerChoice[2];
        usep6.innerHTML=finalOutput[2];
        break;
    }
}