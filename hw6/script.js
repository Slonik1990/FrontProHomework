cabbagePrice = 8;
avocadoPrice = 30;
tomatoPrice = 10;

grapesPrice = 20;
raspberryPrice = 25;
coconutPrice = 50;

do {
    period = prompt("Choose period: winter or summer?");
    if (period === null) continue;
    period = period.replaceAll(" ", "").toLowerCase();
} while (period !== "winter" && period !== "summer");

priceFactor = 0;
period === "winter" ? priceFactor = 2 : priceFactor = 0.8;

do {
    category = prompt("Choose category: vegetables or fruits?");
    if (category === null) continue;
    category = category.replaceAll(" ", "").toLowerCase();
} while (category !== "vegetables" && category !== "fruits");

if (category === "vegetables") {
    do {
        selectedProduct = prompt("Choose one of vegetables: cabbage, avocado or tomato?");
        if (category === null) continue;
        selectedProduct = selectedProduct.replaceAll(" ", "").toLowerCase();
    } while (selectedProduct !== "cabbage" && selectedProduct !== "avocado" && selectedProduct !== "tomato");
} else if (category === "fruits") {
    do {
        selectedProduct = prompt("Choose one of fruits: coconut, grapes or raspberry?");
        if (category === null) continue;
        selectedProduct = selectedProduct.replaceAll(" ", "").toLowerCase();
    } while (selectedProduct !== "coconut" && selectedProduct !== "grapes" && selectedProduct !== "raspberry");
}

do {
    productQuantity = +prompt(`How many ${selectedProduct} you want? Minimal order is 1.`);
} while (isNaN(productQuantity) || productQuantity < 1);

priceOfChoosenProduct = 0;
switch (selectedProduct) {
    case "cabbage":
        priceOfChoosenProduct = cabbagePrice;
        break;
    case "avocado":
        priceOfChoosenProduct = avocadoPrice;
        break;
    case "tomato":
        priceOfChoosenProduct = tomatoPrice;
        break;
    case "grapes":
        priceOfChoosenProduct = grapesPrice;
        break;
    case "raspberry":
        priceOfChoosenProduct = raspberryPrice;
        break;
    case "coconut":
        priceOfChoosenProduct = coconutPrice;
        break;
}

document.write(`
<div class="product" align="center">
  <img src="images/vegetables/${selectedProduct}.svg" alt="${selectedProduct}" width="100" height="100">
  <p>Selected product: <b>${selectedProduct}</b></p>
  <p>Count of ${selectedProduct}: <b>${productQuantity}</b></p>
  <p>Selected period: <b>${period}</b></p>
  <p>Selected category: <b>${category}</b></p>
  <p>Final sum: <b>${priceOfChoosenProduct * productQuantity * priceFactor} UAH</b></p>
</div>
`);


