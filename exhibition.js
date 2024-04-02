const header = document.querySelector('.header-small')
const menus = document.querySelectorAll('.header-small>nav>ul>li>a')
const sec1 = document.querySelector('.navigation')
const artContainer = document.querySelector('.art-container')


function displaySubmenu(e){
    header.style.height='160px'
}
function removeSubmenu(){
    header.style.height=''
}
menus.forEach((item)=>{
    item.addEventListener('mouseover',displaySubmenu)
})

/** 서브네비게이션 출력  */
function displaySubheader(){
    let s = sec1.getBoundingClientRect().top
    if(s<2){
        header.style.display="flex"
    }
    else{
        header.style.display='none'
    }
}

/** json불러오기  */
function loadJson(url){
   return fetch(url).then(response => response.json())
}

/** 전시작품 생성  */
function createArtItem(item){
    const artItem = document.createElement('div')
    artItem.className='art-item'
    const itemImg = document.createElement('div')
    itemImg.className='item-img'
    itemImg.style.background=`url(${item.url})`
    itemImg.style.backgroundSize='cover'
    itemImg.style.backgroundPosition='center'
    const itemDesc = document.createElement('div')
    itemDesc.className='item-desc'
    itemDesc.innerHTML=`
    <h4>${item.author}</h4>
    <p>${item.title}, ${item.date}</p>
    `
    artItem.append(itemImg,itemDesc)
    artContainer.append(artItem)
}




header.addEventListener('mouseleave',removeSubmenu)
window.addEventListener('scroll',displaySubheader)
window.addEventListener('load',function(){
    loadJson("/assets/frontroom.json")
    .then((date)=>{
    date.forEach((i)=>{
        createArtItem(i)
        })
    })
})