import Pagination from "./pagination.js";
import CardList from "./card-list.js";

export default class OnlineStorePage {
    // products -> data
    constructor(products) {
        this.pageSize = 3;
        this.products = products;
        this.components = {};

        this.initComponents();
        this.render();
        this.renderComponents();

        this.initEventListeners();
    }

    getTemplate() {
        return `
        <div>
            <div data-element="cardsList"></div>
            <div data-element="pagination"></div>
        </div>
        `;
    }

    initComponents() {
        const totalPages = Math.ceil(this.products.length / this.pageSize);
        // const productCard = new Card(product);
        const cardList = new CardList(this.products.slice(0, this.pageSize));
        const pagination = new Pagination({
            totalPages: totalPages,
        });

        // this.components.card = productCard;
        this.components.cardList = cardList;
        this.components.pagination = pagination;
    }

    renderComponents() {
        // const cardContainer = this.wrapper.querySelector('[data-element="card"]');
        // cardContainer.classList.add('wrapper-cards-product');
        const cardsContainer = this.wrapper.querySelector('[data-element="cardsList"]');
        cardsContainer.classList.add('wrapper-cards-product');
        const paginationContainer = this.wrapper.querySelector('[data-element="pagination"]');
        paginationContainer.classList.add('wrapper-pagination');


        // cardContainer.append(this.components.card.wrapperElement);
        cardsContainer.append(this.components.cardList.wrapperElement);
        paginationContainer.append(this.components.pagination.wrapperElement);
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.getTemplate();
        this.wrapper = wrapper.firstElementChild;
    }

    initEventListeners() {
        // custom event -> page-changed
        this.components.pagination.wrapperElement.addEventListener('page-changed', event => {
            const pageIndex = event.detail;

            const start = pageIndex * this.pageSize;
            const end = start + this.pageSize;

            this.components.cardList.update(this.products.slice(start, end));
        });
    }
}