fetch("http://localhost:3000/api/products/") //envoyer une requête HTTP de type GET au service web se trouvant à l'adresse  //
    .then((res) => res.json())
    .then((products) => addProducts(products)) //récuperer le résultat de la requête et les passer à la fonction addProducts//
    
    
function addProducts(sofa) {
    sofa.forEach((kanap) => {
        console.log("kanap: " ,kanap)
        const {_id,imageUrl,altTxt,name, description} = kanap

        const image = makeImage(imageUrl, altTxt)
        const anchor = makeAnchor(_id)
        const article = makeArticle()
        const h3 = makeH3(name)
        const p = makeParagraph(description)
    

        article.appendChild(image)
        article.appendChild(h3)
        article.appendChild(p)
        appendChildren(anchor, article)
    
  })
  
 }
            
function makeAnchor(id) {
    const anchor = document.createElement("a")
    anchor.href = "./product.html?id=" + id
    return anchor
}
        

function appendChildren(anchor, article) {
        items.appendChild(anchor)
        anchor.appendChild(article)
    }
    
         
    function makeImage(imageUrl, altTxt) {
        const image = document.createElement("img")
        image.src = imageUrl
        image.alt = altTxt
        return image
     }
        
function makeArticle() {
    const article = document.createElement("article")
    console.log (article)
    return article
}

function makeH3(name) {
    const h3 = document.createElement("h3")
    h3.textContent = name
    h3.classList.add("productName")
    return h3
 }
function makeParagraph(description) {
    const p = document.createElement("p")
    p.textContent = description
    p.classList.add("productDescription")
    return p
 }

    
    