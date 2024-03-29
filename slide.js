function mainSectSwiper(){
    let mainSectSwiper = new Swiper('.mainSectSwiper',{
        direction: 'vertical',
        loop:true,
        autoplay:true,
        allowTouchMove:false,
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },

    })
}
