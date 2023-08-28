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

function purchaseProduct(productName) {
    for (let item of shoppingList) {
        if (item.name === productName) {
            item.purchased = true;
            console.log(`Ви придбали ${item.name}`);
            return;
        }
    }
    console.log(`Продукт ${productName} не знайдено у списку покупок.`);
}


printShoppingList(shoppingList);


purchaseProduct("Молоко");


printShoppingList(shoppingList);