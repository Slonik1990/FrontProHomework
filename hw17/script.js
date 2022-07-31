let kitchenProducts = [
    {
        type: 'grater',
        price: 10,
    },
    {
        type: 'pastry-bag',
        price: 25,
    },
    {
        type: 'scale',
        price: 5,
    },
    {
        type: 'whisk',
        price: 15,
    },
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100, 1000],
    },
    {
        type: 'laptop',
        price: [50, 1500],
    },
    {
        type: 'smartphone',
        price: [80, 2000],
    },
    {
        type: 'tablet',
        price: [20, 1300],
    },
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100,
    },
    {
        type: 'eyeshadow',
        price: 50,
    },
    {
        type: 'lipstick',
        price: 80,
    },
    {
        type: 'nail-polish',
        price: 200,
    },
    {
        type: 'perfume',
        price: 300,
    },
];


function Product(category, type, price){
    this.category = category;
    this.type = type;
    this.price = price;

}

Product.prototype.renderProduct = function (){
    return `<tr>
	            <td><img src="images/${this.category}/${this.type}.svg" alt=${this.type}></td>
	             <td>${this.type}</td>
	             <td>${Array.isArray(this.price) ? this.price.join(" - ") : this.price} USD</td>
             </tr>`;

};


Array.prototype.renderWithCategoryAdding = function (category){
    return this
        .map(item => {
            return new Product(category, item.type, item.price);
        }).map(
        function (product){
            return product.renderProduct();
        },
        ).join("");
};

let renderedKitchen = kitchenProducts.renderWithCategoryAdding("kitchen");
let renderedDevices = devicesProducts.renderWithCategoryAdding("devices");
let renderedCosmetic = cosmeticsProducts.renderWithCategoryAdding("cosmetics");

let allRenderedProducts = renderedKitchen.concat(renderedDevices).concat(renderedCosmetic);


document.write(`
<table>
<thead>
    <th>Image </th>
    <th>Name </th>
    <th>Prise</th>
</thead>
<tbody>
${allRenderedProducts}
</tbody>
</table>
`);









