const header = document.querySelector('.header-small')
const menus = document.querySelectorAll('.header-small>nav>ul>li>a')
const headerBg = document.querySelector('.header-bg')
const sec1 = document.querySelector('.navigation')
const artContainer = document.querySelector('.art-container')
const modalContainer = document.querySelector('.modal')
const menuicon = document.querySelector('.menuicon')
const navBox = document.querySelector('.navBox')
const closeBtn = navBox.querySelector('.close-btn')
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


/** 전시작품 생성  */
function createArtItem(item,index){
    const artItem = document.createElement('div')
    artItem.className='art-item'
    artItem.index=`${index}`
    const itemImg = document.createElement('div')
    itemImg.className='item-img'
    itemImg.style.background=`url(${item.url[0]})`
    itemImg.style.backgroundSize='cover'
    itemImg.style.backgroundPosition='center'
    itemImg.index=`${index}`
    const itemDesc = document.createElement('div')
    itemDesc.className='item-desc'
    itemDesc.innerHTML=`
    <h4>${item.author}</h4>
    <p>${item.title}, ${item.date}</p>
    `
    artItem.append(itemImg,itemDesc)
    artContainer.append(artItem)
}

/** 모달아이템  */
function createModalItem(item,index){
    const artModal = document.createElement('div')
    artModal.className='art-modal'
    artModal.index=`${index}`
    const modalImgBox = document.createElement('div')
    modalImgBox.className='modal-imgbox'
    const modalSwiper = document.createElement('div')
    modalSwiper.className='modalSwiper'
    const modalImgs = document.createElement('div')
    modalImgs.className='modal-imgs swiper-wrapper'
    for(let i =0;i<item.url.length;i++){
        const modalImg = document.createElement('div')
        modalImg.className = 'modal-img swiper-slide'
        modalImg.index=`${index}`
        modalImg.style.background=`url(${item.url[i]}) no-repeat`
        modalImg.style.backgroundSize=`contain`
        modalImgs.append(modalImg)
    }

    const pagination = document.createElement('div')
    pagination.className='swiper-pagination'
    const imgDesc = document.createElement('div')
    imgDesc.className='modal-imgdesc'
    imgDesc.innerText=`${item.author} ${item.title} ${item.date} ${item.재질} ${item.규격}`
    modalSwiper.append(modalImgs)
    modalImgBox.append(modalSwiper,pagination,imgDesc)

    const modalDesc = document.createElement('div')
    modalDesc.className='modal-desc'
    modalDesc.innerHTML='<p>작품소개</p>'
    const mItemDesc=document.createElement('div')
    mItemDesc.className='modal-item-desc'
    if(item.first){
        mItemDesc.innerHTML=`
        <p>The First Collection of Koohouse</p>
        <p>${item.한글}</p>
        <p>${item.영어}</p>
        <p>${item.출처}</p>
        `
    }else{
        mItemDesc.innerHTML=`
        <p>${item.한글}</p>
        <p>${item.영어}</p>
        <p>${item.출처}</p>
        `
    }
    const modalAuthor = document.createElement('div')
    modalAuthor.className='modal-author'
    const authorImg = document.createElement('div')
    authorImg.className='author-img'
    authorImg.style.background=`url(${item.작가사진}) no-repeat`
    authorImg.style.backgroundSize='cover'
    authorImg.style.backgroundPosition='center'
    const authorDesc = document.createElement('div')
    authorDesc.className='author-desc'
    authorDesc.innerHTML=`
    <p>${item.한글이름} ${item.author}(${item.출생},${item.국가})</p>
    <p>${item.저자설명}</p>
    <p>${item.저자영어설명}</p>
    `

    const btn = document.createElement('div')
    btn.className='close-btn2'
    btn.innerHTML=`<i class="fa-solid fa-xmark"></i>`

    modalAuthor.append(authorImg,authorDesc)
    modalDesc.append(mItemDesc,modalAuthor)
    artModal.append(modalImgBox,modalDesc)
    modalContainer.append(artModal,btn)
}


function modalSwiper(){
    let modal = new Swiper('.modalSwiper',{
        loop:true,
        allowTouchMove:false,
        pagination:{
            el:'.swiper-pagination',
            clickable:true
        }
    })
}

function closeModal(){
    modalContainer.style.display='none'
    document.documentElement.style.overflowY='auto'
}

menus.forEach((item)=>{
    item.addEventListener('mouseover',displaySubmenu)
})
header.addEventListener('mouseleave',removeSubmenu)

window.addEventListener('scroll',displaySubheader)
window.addEventListener('load',function(){
    loadJson("/assets/library.json")
    .then((date)=>{
    date.forEach((item,i)=>{
        createArtItem(item,i)
        const artItems = document.querySelectorAll('.art-item')
        artItems.forEach(art=>art.addEventListener('click',function(e){
            document.documentElement.style.overflowY='hidden'
            if(art.index === e.target.index){
                modalContainer.innerHTML=''
                createModalItem(date[e.target.index],e.target.index)
                const closeBtn = document.querySelector('.close-btn2')
                // const artModal = document.querySelector('.art-modal')
                // artModal.addEventListener('click',closeModal)
                closeBtn.addEventListener('click',closeModal)
            }
            modalContainer.style.display='block'            
            modalSwiper()
        }))
    })
    })
})


clickMenu()
menuicon.addEventListener('click',openNav)
navBox.addEventListener('click',openMenu)
closeBtn.addEventListener('click',hideMenu)
window.addEventListener('scroll',headerBackground)