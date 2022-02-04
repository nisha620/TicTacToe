let turn ='X';

function changeTurn() {
    return turn==="X"?"O":"X"
}
function display(name){
document.getElementsById("turn").innerText=name;}


//game logic

let boxes =document.getElementsByClassName("boxes");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',function(){
        if(boxtext.innerText==''){
            boxtext.innerText=turn;
            
            turn=changeTurn()
            display(turn)
        }
    })
})
