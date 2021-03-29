const rows = document.querySelectorAll("tbody tr")
const result = document.querySelector("#total-price")

rows.forEach((row) => {
    const input = row.querySelector("input");
    const price = row.querySelector(".price"); // querySelector - поиск, row - это где искать.
    let priceNumber = +price.innerText
    let resultNumber = +result.innerText
    input.onclick = () => {
        let resultNumber = +result.innerText
        if (input.checked === true){
            result.innerText = resultNumber + priceNumber;
        } else {
            result.innerText = resultNumber - priceNumber;
        }
    }
})

