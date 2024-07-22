const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')

linkForm.addEventListener('submit', formSubmit)

function formSubmit(e){
    e.preventDefault()
    //const link = input.value
    if(input.value === ''){
        errMsg.innerHTML="please enter somthing"
        input.classList.add('border-red-600')
    }

}

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
btn.addEventListener('click', navToggle)
function navToggle(){
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}