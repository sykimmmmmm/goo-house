const dropdowns = document.querySelectorAll('.submenu>li>a')
const menus2 = document.querySelectorAll('.submenu2')
const submenus = document.querySelectorAll('.submenu')
const wrapper = document.getElementById('wrapper')
const nav = headerBg.querySelectorAll('nav>li ul')


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
        mainSectSwiperSlide.style.background = `url(/imgs/bg${i}.jpg) no-repeat`
        mainSectSwiperSlide.style.backgroundSize='cover'
        mainSectSwiperSlide.style.backgroundPosition='center'
        mainSectSwiperWrapper.append(mainSectSwiperSlide)
    }
    mainSectionSwiper.append(mainSectSwiperWrapper,swiperpagination)
    wrapper.append(mainSectionSwiper)
}
/** 스와이퍼 작동 */
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
createImg()
mainSectSwiper()
const spexhi = document.querySelector('.spexhi')

/** 슬라이더이후 헤더 색 변환  */
function headerChange(){
    let x = spexhi.getBoundingClientRect()

    if(x.top<=0){
        headerBg.style.background='rgba(0,0,0,1)' 
        for(let i of nav){
            i.style.background='rgba(0,0,0,1)'
        }

    }else{
        headerBg.style.background='rgba(0,0,0,.5)'
        for(let i of nav){
            i.style.background=''
        }
    }
}
window.addEventListener('scroll',headerChange)
dropdowns.forEach((dropdown)=>{
    dropdown.addEventListener('mouseover',function(e){
        let a = dropdown.nextElementSibling
        let b = dropdown.querySelector('i')
        
        if(a){
            a.classList.add('on')
            b.style.transform='rotate(90deg)'
        }
    })
})

submenus.forEach((submenu)=>{
    submenu.addEventListener('mouseleave',function(){
        menus2.forEach((x)=>{
            let b = submenu.querySelectorAll('i')
            b.forEach((i)=>{
                i.style.transform='rotate(0deg)'
            })
            
            x.classList.remove('on')
        })
    })
})