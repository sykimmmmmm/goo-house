const wrapper = document.getElementById('wrapper')

/** 메인화면 스와이퍼 이미지 생성 */
function createImg(){
    const mainSectionSwiper = document.createElement('div')
    mainSectionSwiper.className = 'mainSectSwiper'
    const mainSectSwiperWrapper = document.createElement('div')
    mainSectSwiperWrapper.className = 'swiper-wrapper'
    const swiperpagination = document.createElement('div')
    swiperpagination.className = 'swiper-pagination'
    for(let i =1;i<=10;i++){
        const mainSectSwiperSlide = document.createElement('div')
        mainSectSwiperSlide.className = 'swiper-slide'
        mainSectSwiperSlide.style.background = `url(/imgs/bg${i}.jpg)`
        mainSectSwiperWrapper.append(mainSectSwiperSlide)
    }
    mainSectionSwiper.append(mainSectSwiperWrapper,swiperpagination)
    wrapper.append(mainSectionSwiper)
}

window.addEventListener('load',function(){
    createImg()
    mainSectSwiper()
})