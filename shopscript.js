console.log(products)

let productsHTML = "<h2>NINJAGO</h2>"

products.map(product => productsHTML += 
`<article>
<img src="website_images/PROD_${product.imagefile}" alt="${product.title}">
<a href="#">${product.category}</a>
<h3>${product.title}</h3>
<span>Kr. ${product.price}</span>
<button onclick="addToCart(${product.prodid})">Legg i handlekurv</button>
</article>`)

// console.log(productsHTML)

const main = document.getElementsByTagName("main")
main[0].innerHTML = productsHTML

// HANDLEVOGNFUNKSJONALITET
function addToCart(productid) {
    // console.log("addToCart kjører:" + productid)
    cart.push({product: productid, quantity: 1})
    console.log(cart)

    updateCartDisplay()
}

function updateCartDisplay() {
    let cartHTML = ""
    cart.map(prod => {
        let filteredProduct = products.filter(filterprod => prod.product === filterprod.prodid)
        console.log(filteredProduct)
        cartHTML += `<li>
            <span class="title">${filteredProduct[0].title}</span>
            <span class="price">${filteredProduct[0].price},-</span>
            <span class="quantity">X${prod.quantity}</span>
            <span class="functions">
                <button>X</button>
            </span>
        </li>`
    })
    document.getElementById("cartlist").innerHTML = cartHTML
}
