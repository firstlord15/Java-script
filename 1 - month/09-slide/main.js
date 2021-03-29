const images = document.querySelectorAll(".slide img")
const length = images["length"]
const spans = document.querySelectorAll(".pagi span")
let counter = 0

// const название функции(создание функции)

const setImage = (counter) => { // counter типо  
    images.forEach((img, index)=>{
        img.className = "";
        spans[index].className = ""
    })
    images[counter].className = "active";
    spans[counter].className = "active";
}

setInterval(
    () => {
        counter = counter%length
        setImage(counter) // так мы указываем что counter относиться к counter тут
        counter++
    }, 10000) // 1000 - 1s 

// то что мы сделали, это смена фото по секундно

