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
