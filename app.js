const nav = document.querySelector('.nav')
const dropdowns = document.querySelectorAll('.dropdown')
const dropdownMenus = document.querySelectorAll('.dropdown-menu')

console.log(dropdownMenus)
console.log(dropdowns)
function displaySubmenu(e){
    console.log(this.children)
    if(this.children[1]){
        this.children[1].classList.add('show')
    }
}


dropdowns.forEach((menu)=>{
    menu.addEventListener('mouseover',displaySubmenu)
})