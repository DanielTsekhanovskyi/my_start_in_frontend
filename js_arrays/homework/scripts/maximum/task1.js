let shoppingList = [
    { name: "Молоко", quantity: 2, purchased: false, pricePerUnit: 25 },
    { name: "Хліб", quantity: 1, purchased: true, pricePerUnit: 10 },
    { name: "Яйця", quantity: 12, purchased: false, pricePerUnit: 2 },
];

function printShoppingList(list) {
    list.sort((a, b) => a.purchased - b.purchased);
    
    for (let item of list) {
        let status = item.purchased ? "Придбано" : "Не придбано";
        console.log(`${item.name} - Кількість: ${item.quantity}, Статус: ${status}, Ціна за одиницю: ${item.pricePerUnit}, Загальна сума: ${item.quantity * item.pricePerUnit}`);
    }
}

function calculateTotalCost(list) {
    let totalCost = 0;
    for (let item of list) {
        totalCost += item.quantity * item.pricePerUnit;
    }
    return totalCost;
}

function calculatePurchasedTotalCost(list) {
    let totalCost = 0;
    for (let item of list) {
        if (item.purchased) {
            totalCost += item.quantity * item.pricePerUnit;
        }
    }
    return totalCost;
}

function calculateUnpurchasedTotalCost(list) {
    let totalCost = 0;
    for (let item of list) {
        if (!item.purchased) {
            totalCost += item.quantity * item.pricePerUnit;
        }
    }
    return totalCost;
}

function sortProductsByTotalPrice(list, order) {
    list.sort((a, b) => order === "asc" ? a.totalPrice - b.totalPrice : b.totalPrice - a.totalPrice);
    return list;
}


printShoppingList(shoppingList);


console.log("Загальна сума всіх продуктів:", calculateTotalCost(shoppingList));


console.log("Загальна сума придбаних продуктів:", calculatePurchasedTotalCost(shoppingList));


console.log("Загальна сума непридбаних продуктів:", calculateUnpurchasedTotalCost(shoppingList));


console.log("Продукти від меншої до більшої суми:", sortProductsByTotalPrice([...shoppingList], "asc"));
console.log("Продукти від більшої до меншої суми:", sortProductsByTotalPrice([...shoppingList], "desc"));
