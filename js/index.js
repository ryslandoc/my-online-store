import Card from "../js/card.js";
import Pagination from "../js/pagination.js";

const product = {
    id: '1',
    images: ['https://i.citrus.world/imgcache/size_800/uploads/shop/d/d/ddf8b36b0bef85fc61453646a76fa934.jpg'],
    title: 'Apple iPhone 11 64Gb Black (MHDA3) Slim Box',
    rating: 2.76,
    price: 29000,
    category: 'phones',
};

// const laptop = {
//     id: "2",
//     title: "Монітор 32\" Apple Pro Display XDR Nano-texture glass (MWPF2GU/A)",
//     images: ["https://i.allo.ua/media/catalog/product/cache/3/image/434x494/602f0fa2c1f0d1ba5e241f914e856ff9/2/0/2003662_result_1.jpg"],
//     price: 19000,
//     rating: 2.25,
//     category: "laptops",
// };

export default class OnlineStorePage {
    constructor() {
        this.components = {};
        this.initComponents();
        this.render();
        this.renderComponents();
    }

    getTemplate() {
        return `
        <div>
            <div data-element="card"></div>
            <div data-element="pagination"></div>
        </div>
        `;
    }

    initComponents() {
        const productCard = new Card(product);
        const pagination = new Pagination({});

        this.components.card = productCard;
        this.components.pagination = pagination;
    }

    renderComponents() {
        const cardContainer = this.wrapper.querySelector('[data-element="card"]');
        cardContainer.classList.add('wrapper-cards-product');
        const paginationContainer = this.wrapper.querySelector('[data-element="pagination"]');
        paginationContainer.classList.add('wrapper-pagination');


        cardContainer.append(this.components.card.wrapperElement);
        paginationContainer.append(this.components.pagination.wrapperElement);
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.getTemplate();
        this.wrapper = wrapper;
    }
}