const artContainer = document.querySelector('.art-container')
const modalContainer = document.querySelector('.modal')

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
        loop:false,
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


window.addEventListener('load',function(){
    loadJson("/assets/frontroom.json")
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

