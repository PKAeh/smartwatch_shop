const black = document.getElementById('black')
const orange = document.getElementById('orange')
const purple = document.getElementById('purple')
const pink = document.getElementById('pink')
const img = document.getElementById('img')


black.addEventListener('click', () => {
    img.src = './img/black-watch.png'
})
orange.addEventListener('click', () => {
    img.src = './img/orange-watch.png'
})
pink.addEventListener('click', () => {
    img.src = './img/pink-watch.png'
})
purple.addEventListener('click', () => {
    img.src = './img/purple-watch.png'
})