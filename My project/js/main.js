//Задание 1
class Cart { // Класс корзины
    constructor(container = '.cart') {
        this.container = container;
        this.products = [];
        this.summ = 0;
    }

    addProduct() {} //Добавить продукт в корзину

    deleteProduct() {} //Удалить продукт из корзины

    deleteAll() {} //Удалить всё из корзины

    buy() {} //Купить
}

class ProductInCart { //Класс продукта в корзине
    constructor(product){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.image = product.image;
    }

    render() {} // Отрисовка продукта
}


class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.summ = 0;
        this._fetchProducts();
        this.render();
        this.summOfPrices();
    }

    summOfPrices() {  // Задание 2
        this.goods.forEach(good => {
            this.summ += good.price;
        });
        console.log(this.summ);
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend",item.render());
        }
    }
}

class ProductItem{
    constructor(product,img='https://imgholder.ru/250x350/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="products_item">
                    <img class="products_item_image" src="${this.img}" alt="">
                    <h3 class="products_item_title">${this.title}</h3>
                    <p class="products_item_price">${this.price}</p>
                    <button class="products_item_buy-btn">Купить</button>
                </div>`
    }
}

let list = new ProductList();
