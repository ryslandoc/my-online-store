import Card from "./card.js";

export default class CardList {
    constructor(data = []) {
        // дата - це масив об'єктів
        this.data = data;
        this.render();
        this.renderCards();
    }

    getTemplate() {
        return `
        <div>
            <div class="wrapper-cards-product" data-element="body">

            </div>
        </div>
        `;
    }

    renderCards() {
        const cards = this.data.map(item => {
            const card = new Card(item);
            return card.wrapperElement;
        });

        const body = this.wrapperElement.querySelector('[data-element="body"]');
        body.innerHTML = '';
        body.append(...cards);
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.getTemplate();
        this.wrapperElement = wrapper.firstElementChild;
    }

    update(data = []) {
        this.data = data;

        this.renderCards();
    }
}