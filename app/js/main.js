
const buttonsArrowDown = document.querySelectorAll('.faq__button')
const showResponse = document.querySelectorAll('.faq__response')
const question = document.querySelectorAll('.faq__question')
const closeButton = document.querySelectorAll('.faq__button-close')
const arrowDown = document.querySelectorAll('.faq__button-arrowDown')


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


