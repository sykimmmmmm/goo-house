const header = document.querySelector('.header-small')
const menus = document.querySelectorAll('.header-small>nav>ul>li>a')
const headerBg = document.querySelector('.header-bg')
const sec1 = document.querySelector('.navigation')
const menuicon = document.querySelector('.menuicon')
const navBox = document.querySelector('.navBox')
const closeBtn = navBox.querySelector('.close-btn')
/** json불러오기  */
function loadJson(url){
    return fetch(url).then(response => response.json())
}

/* 헤더 관련  */
function displaySubmenu(e){
    header.style.height='170px'
}
function removeSubmenu(){
    header.style.height=''
}

function headerBackground(e){
    let a = headerBg.getBoundingClientRect()
    if(a.top===0){
        headerBg.style.background='white'
    }
    if(document.documentElement.scrollTop===0){
        headerBg.style.background=''
    }
}

/** 서브네비게이션 출력  */
function displaySubheader(){
    if(sec1){

        let s = sec1.getBoundingClientRect().top
        if(s<2){
            header.style.display="flex"
        }
        else{
            header.style.display='none'
        }
    }
}

/** 반응형 서브메뉴 아코디언형식  */
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
        if(header){
            const menus2 = header.querySelectorAll('li>a')
            menus2.forEach((menu)=>{
                let a = menu.nextElementSibling
                if(a){
                    menu.href='#none'
                }
            })
        } 
        menus.forEach((menu)=>{
            let a = menu.nextElementSibling
            if(a){
                menu.href='#none'
            }
        })
        
    }
}

clickMenu()
menus.forEach((item)=>{
    item.addEventListener('mouseover',displaySubmenu)
})
if(header){
    header.addEventListener('mouseleave',removeSubmenu)
}
window.addEventListener('scroll',displaySubheader)
menuicon.addEventListener('click',openNav)
navBox.addEventListener('click',openMenu)
closeBtn.addEventListener('click',hideMenu)
window.addEventListener('scroll',headerBackground)