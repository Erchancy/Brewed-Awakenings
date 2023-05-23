import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li
                data-name="${product.name}"
                data-price="${product.price}"
                data-type="product"
                >${product.name}
            </li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "product") {
        // product.name costs \n prodcut.price
        window.alert(`${itemClicked.dataset.name} costs\n$${itemClicked.dataset.price}`)
    }
    }
)