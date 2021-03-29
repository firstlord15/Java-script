const product = document.querySelector('#product')
const count = document.querySelector('#count')
const price = document.querySelector('#price')
const cost = document.querySelector('#cost')
const button = document.querySelector('.buti')
const button2 = document.querySelector('.buti2')
const list = document.querySelector('.list-group')
const cost10 = document.querySelector('#cost10')

const json = localStorage.getItem("guest");
let guest = JSON.parse(json);

const functi = () => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = '<span class="product">' + product.value +  '</span>' + '<span class="count">' + +count.value + '</span>' + '<span class="price">' + +price.value + '</span>';;
    let countNumber = +count.value;
    let priceNumber = +price.value;
    let cost1 = priceNumber*countNumber;
    list.appendChild(li);
    cost10.innerText = +cost10.innerText + cost1;
}

button.onclick = () => {
    functi();
    product.value = '';
    count.value = '';
    price.value = '';
    product.focus();
}
