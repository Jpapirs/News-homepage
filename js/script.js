const btn = document.querySelector('.btn')

function toggleEvent(e){
    e.preventDefault()
    const list = document.querySelector(".nav")
    list.classList.toggle('active')

}

btn.addEventListener('click', toggleEvent)