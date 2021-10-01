const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.nav-items')
const title = document.querySelector('.title')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active')
    navigation.classList.toggle('active')
})





const split = title.textContent.split("")

title.textContent = ""

for (let i = 0; i < split.length; i++) {
    title.innerHTML += '<span>' + split[i] + '</span>'
}