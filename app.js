const header = document.querySelector('header')
const nav = document.querySelector('.nav')
const dropdowns = nav.querySelectorAll('.dropdown')

function displaySub(e){
    dropdowns.forEach((item)=>{
        let a = item.nextElementSibling
        item.nextElementSibling.style.display='none'
        if(a){
            if(e.target===item){
                item.nextElementSibling.style.display='block'
            }
        }
    })
}


header.addEventListener('mouseover',displaySub)