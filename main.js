// hide and show menu

const menuBar = document.getElementById('menu-bar')
const hamburgerbar = document.getElementById('showlinks')
function showsidebar(){
    menuBar.classList.remove('hidden')
    hamburgerbar.classList.add('hidden')
}
function hidesidebar(){ 
    menuBar.classList.add('hidden')
    hamburgerbar.classList.remove('hidden')
} 
// more text
function toggleMore() {
    var moreText = document.getElementById("moreText");
    var btn = document.querySelector(".btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.innerHTML = "Show Less";
    } else {
        moreText.style.display = "none";
        btn.innerHTML = "Click More";
    }
}