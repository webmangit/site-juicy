const menuIcon = document.querySelector('.menu-icon')
const header = document.querySelector('.header')
const body = document.querySelector('body')

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active')
  header.classList.toggle('header--mobile')
  body.classList.toggle('no-scroll')
})

// Слайдер со стрелками
// const sliderArrows = document.querySelector('.slider-arrows')
// const slidesArrows = Array.from(sliderArrows.querySelectorAll('.slider-arrows__item'))
// const prev = sliderArrows.querySelector('.slider-arrows__arrow--left')
// const next = sliderArrows.querySelector('.slider-arrows__arrow--right')


// let slideIndex = 0

// function showSlideArrows(n) {
//   if (n < 0) {
//     if (slideIndex === 0) {
//       slideIndex = slidesArrows.length - 1
//     } else {
//       slideIndex--
//     }
//   } else if (n > 0) {
//     if (slideIndex === slidesArrows.length - 1) {
//       slideIndex = 0
//     } else {
//       slideIndex++
//     }
//   }

//   for (let i = 0; i < slidesArrows.length; i++) {
//     let curr = slidesArrows[i]

//     if (slidesArrows.indexOf(curr) === slideIndex) {
//       curr.style.display = 'block'
//     } else {
//       curr.style.display = 'none'
//     }
//   }

// }



// prev.addEventListener('click', () => showSlideArrows(-1))
// next.addEventListener('click', () => showSlideArrows(1))





// -----------------------------
const sliderArrows = document.querySelector('.slider-arrows')
const slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item')
const prev = sliderArrows.querySelector('.slider-arrows__arrow--left')
const next = sliderArrows.querySelector('.slider-arrows__arrow--right')


let slideIndex = 0


function showSlideArrows(n = 0) {
  slideIndex += n

  if (slideIndex < 0) {
    slideIndex = slidesArrows.length - 1
  } else if (slideIndex >= slidesArrows.length) {
    slideIndex = 0
  }

  slidesArrows.forEach(item => item.style.display = 'none')
  slidesArrows[slideIndex].style.display = 'block'
}

prev.addEventListener('click', () => showSlideArrows(-1))
next.addEventListener('click', () => showSlideArrows(1))
showSlideArrows() // чтобы один слайд сразу показывался, а остальные скрывались



// Слайдер с точками
const sliderDots = document.querySelector('.slider-dots')
const slidesDots = sliderDots.querySelectorAll('.slider-dots__item')
const wrapperDote = sliderDots.querySelector('.slider-dots__nav')

const dots = []

function showSlideDots(index) {
  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].classList.add('slider-dots__nav-item--active')
      slidesDots[i].style.display = 'block'
    } else {
      dots[i].classList.remove('slider-dots__nav-item--active')
      slidesDots[i].style.display = 'none'
    }
  }
}

for (let i = 0; i < slidesDots.length; i++) {
  const dot = document.createElement('button')

  dot.classList.add('slider-dots__nav-item')
  if (i === 0) dot.classList.add('slider-dots__nav-item--active')

  if (i !== 0) slidesDots[i].style.display = 'none'

  dot.addEventListener('click', () => showSlideDots(i))

  dots.push(dot)
  wrapperDote.append(dots[i])
}



