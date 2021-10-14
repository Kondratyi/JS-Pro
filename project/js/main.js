const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (title, price, image = 'https://imgholder.ru/250x350/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson') => {
    return `<div class="products_item">
                <img class="products_item_image" src="${image}" alt="">
                <h3 class="products_item_title">${title}</h3>
                <p class="products_item_price">${price}</p>
                <button class="products_item_buy-btn">Купить</button>
            </div>`;
};

const renderPage = list => {
    const productsList = list.map(() => renderProduct(this.title, this.price)).join('');;
    document.querySelector('.products').insertAdjacentHTML('afterbegin', productsList);
};

renderPage(products);