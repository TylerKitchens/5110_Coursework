//Given funciton 
let sq = document.querySelector("#square")
function changeCSS(color){
    //remove the background image if changing color
    sq.style.background = 'none'

    sq.style.backgroundColor = color;
    sq.style.borderRadius = "90%";
    sq.styl 

}

function changePic(){
    sq.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg')";
}

function addBorder(){
    sq.style.border = "thick solid #0000FF"
}