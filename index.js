var animate=0
function expand(){
    if(animate === 0){
        document.getElementById("dropdown").style.animation="dropmenu 1s cubic-bezier(0.75, 0.27, 0.15, 0.99) forwards";
        document.getElementById("drop-items").style.animation="droptext 0.5s linear 0.5s forwards";
        animate=1;
    } else {
        document.getElementById("dropdown").style.animation="dropmenuR 1s cubic-bezier(0.75, 0.27, 0.15, 0.99)  forwards";
        document.getElementById("drop-items").style.animation="droptextR 0.5s linear forwards";
        animate=0;
    }
}
