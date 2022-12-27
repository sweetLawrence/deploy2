let more = document.querySelector(".more");
let sidenav = document.querySelector(".sidenav");
let close = document.querySelector(".close");
let nav = document.querySelector(".nav");
let bg= document.querySelector(".bgimg");
more.addEventListener('click', showNav);
close.addEventListener('click',hideNav);
var visible = 0;
// function toggleNav(){
//     if (!visible) {
//         visible = true;
//         sidenav.style.display = 'flex';
//     }
//     if (visible) {
//         visible = false;
//         sidenav.style.display = 'none';
//     }
// }
function showNav() {
    // alert(document.body.clientWidth)

    sidenav.style.display = 'flex';
    more.style.opacity = 0;
    bg.style.display = 'none';
    // more.style.display = 'none';
    // sidenav.style.transition = "all 2s"


    



}
function hideNav() {

    sidenav.style.display = 'none';
    // more.style.display = 'flex';
     more.style.opacity = 1;
     bg.style.display = 'flex';



}
