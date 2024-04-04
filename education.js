const header = document.querySelector('.header-small')
const menus = document.querySelectorAll('.header-small>nav>ul>li>a')
const sec1 = document.querySelector('.navigation')

function displaySubmenu(e){
    header.style.height='170px'
}
function removeSubmenu(){
    header.style.height=''
}

function displaySubheader(){
    let s = sec1.getBoundingClientRect().top
    if(s<2){
        header.style.display="flex"
    }
    else{
        header.style.display='none'
    }
}

function openMenu(e){
    let x = e.target
    let y = e.target.nextElementSibling
    const icon = e.target.querySelector('i')
    if(x.classList.contains('title')){
        y.classList.toggle('open')
        icon.style.transform='rotate(90deg)'
    }
    if(x.classList.contains('title')&&!y.classList.contains('open')){
        icon.style.transform='rotate(0deg)'
    }
}

function hideMenu(){
    navBox.style.display='none'
    document.documentElement.style.overflowY='auto'
}

function openNav(e){
    navBox.style.display='flex'
    if(document.documentElement.clientWidth<450){
        e.stopPropagation()
        document.documentElement.style.overflowY='hidden'
    }
}
/** 1400px이하 반응형일때 최종뎁스만 링크 */
function clickMenu(){
    if(document.documentElement.clientWidth<1440){
        const menus = headerBg.querySelectorAll('li>a')
        const menus2 = header.querySelectorAll('li>a')
        menus.forEach((menu)=>{
            let a = menu.nextElementSibling
            if(a){
                menu.href='#none'
            }
        })
        menus2.forEach((menu)=>{
            let a = menu.nextElementSibling
            if(a){
                menu.href='#none'
            }
        })
    }
}

menus.forEach((item)=>{
    item.addEventListener('mouseover',displaySubmenu)
})
header.addEventListener('mouseleave',removeSubmenu)
window.addEventListener('scroll',displaySubheader)