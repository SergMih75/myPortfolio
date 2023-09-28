document.querySelector('.nav-desktop-btn').addEventListener('click', ()=>{
    document.querySelector('.popup-contact').style.display="flex"
    document.body.style.position = 'fixed'
})

document.querySelector('.popup-contact__close').addEventListener('click', ()=>{
    document.querySelector('.popup-contact').style.display="none"
    document.body.style.position = 'relative'
})

// let inputData = document.querySelectorAll('.popup-contact__input').addEventListener('input', ()=>{
//     if (!inputData.value==null) {
//         console.log('gfk');
//     }
// })