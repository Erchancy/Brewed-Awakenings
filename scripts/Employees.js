import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li
                data-type="employee"
                data-name="${employee.name}"
                data-id="${employee.id}"
                >${employee.name}
            </li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "employee") {

            let productsSold = 0

            const employeeId = itemClicked.dataset.id

            const orders = getOrders()

                for (const order of orders) {
                    if (order.employeeId === parseInt(employeeId)) {
                        productsSold++
                    }
                }

                window.alert(`${itemClicked.dataset.name} has sold ${productsSold} products`)
        }
    }
)

