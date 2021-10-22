
class Basket {
    constructor(container = '.basket') {
        this.container = container;
        this.goods = [];
        this.addGoods()
            .then(data => {
                this.goods = [...data.contents];
                this.render();
            });
    }
    addGoods() {
        return fetch(`${API}/getBasket.json`)
        .then(result => result.json())
        .catch(error => console.log(error));
    }
    removeGoods() {

    }
    changeGoods() {

    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let element of this.goods) {
            const elemObj = new ElemBasket(element);
            block.insertAdjacentHTML('beforeend', elemObj.render());
        }
    }
}

class ElemBasket {
    constructor(element, image = 'https://via.placeholder.com/30x30') {
        this.id = element.id_product;
        this.name = element.product_name;
        this.price = element.price;
        this.quantity = element.quantity;
        this.image = image;
    }

    render(){
        return `<div class="backet_item" data-id="${this.id}">
                <img src="${this.image}" alt="Some img">
                <div class="backet_item_desc">
                    <h3>${this.name}</h3>
                    <p>${this.price} $</p>
                </div>
            </div>`
    }
}

let inBasket = new Basket();
console.log(inBasket);
