const numberObject= localStorage.length
console.log("nbr objt :", numberObject)
const cart = []
const totalPrice = []
const totalPriceEl= document.getElementById("totalPrice")



takeItems()
cart.forEach((item) => showItem(item))
totalPriceEl.textContent = "somme"


function takeItems() {
for (let i = 0; i < numberObject; i++) {
    const item= localStorage.getItem(localStorage.key(i))
    const itemObject = JSON.parse(item)
    cart.push(itemObject)
}
}
console.log (cart)



function showItem (item){ 
    const article = makeArticle (item)
    console.log(article)
    showArticle(article)
    const div = makeImage(item)
    article.appendChild(div)

   
    const cartItemContent = makeCartItemContent (item)
    article.appendChild(cartItemContent)
}
function makeCartItemContent(item) {
    const div = document.createElement("div")
    div.classList.add("cart_item_content")

    const description = document.createElement("div")
    description.classList.add("cart__item__content__description")
    const h2 = document.createElement("h2")
    h2.textContent = item.name
    const p = document.createElement("p")
    p.textContent = item.color;
    const p2 = document.createElement("p")
    p2.textContent = item.price + " €"
    const p3 = document.createElement("p")
    p3.textContent= "quantité: " + item.quantity
    const p4 = document.createElement("p")
    p4.textContent = "prix total : " + (item.quantity * item.price) + " €"
    totalPrice.push(item.quantity* item.price)

    description.appendChild(h2)
    description.appendChild(p)
    description.appendChild(p2)
    description.appendChild(p3)
    description.appendChild(p4)
    div.appendChild(description)
    return div
    

}

function showArticle(article){
    document.querySelector("#cart__items").appendChild(article)
}
function makeArticle (item){
    const article = document.createElement("article")
    article.classList.add("cart__item")
    article.dataset.id = item.id
    article.dataset.color = item.color
    return article
}
function makeImage(item){
    const div = document.createElement("div")
    div.classList.add("cart__item__img")

    const image = document.createElement('img')
    image.src = item.imageUrl
    image.alt = item.altTxt
    div.appendChild(image)
    return div
    
}