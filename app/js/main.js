
let buttonsArrowDown = document.querySelectorAll('.faq__button')
let showResponse = document.querySelectorAll('.faq__response')
let question = document.querySelectorAll('.faq__question')
let closeButton = document.querySelectorAll('.faq__button-close')
let arrowDown = document.querySelectorAll('.faq__button-arrowDown')


let IsDown = true

buttonsArrowDown.forEach((btn, index, arr) => {
  arr[index].addEventListener('click', (event) => {

    console.log(event.target)

      if (!arrowDown[index].closest('.remove')) {

        arrowDown[index].classList.add('remove')
        closeButton[index].classList.remove('remove')

        showResponse[index].style.display = 'block'
        question[index].style.marginBottom = '40px'

      } else {

        arrowDown[index].classList.remove('remove')
        closeButton[index].classList.add('remove')

        showResponse[index].style.display = 'none'
        question[index].style.marginBottom = '0px'

      }


  })
})







let img = document.querySelector('.images')

img.addEventListener('mousedown', (event) => {

  console.log(event.type)
  console.log(event)




})