const eduImgs = document.querySelectorAll('.edu-img')
const bigPicture = document.querySelector('.bigPicture')
const bigPictureWrapper = document.querySelector('.bigPictureWrapper')

/** 프로그램 이미지 클릭시 풀스크린  */
function fullscreen(){
    let x = window.getComputedStyle(this).background
    bigPicture.parentElement.style.display='flex'
    bigPicture.style.background=`${x}`
    document.documentElement.style.overflowY='hidden'
}
function hideScreen(e){
    // if(e.target !== bigPicture){
        document.documentElement.style.overflowY='auto'
        this.style.display='none'
    // }
}


function eduSwiper(){
    let eduSwiper = new Swiper('.eduSwiper',{
        slidesPerView: 1,
        allowTouchMove:true,
        breakpoints: {
            // when window width is >= 450px
            450: {
              slidesPerView: 1,
              spaceBetween: 20,
              allowTouchMove:true
            },
            // when window width is >= 750px
            800: {
              slidesPerView: 2,
              spaceBetween: 30,
              allowTouchMove:true
            },
            // when window width is >= 1200px
            1400: {
              slidesPerView: 3,
              spaceBetween: 40,
              allowTouchMove:false
            }
          },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination:{
            el:'.swiper-pagination',
            clickable:true
        }
    })
}

eduSwiper()
eduImgs.forEach((item)=>{
    item.addEventListener('click',fullscreen)
})
bigPictureWrapper.addEventListener('click',hideScreen)