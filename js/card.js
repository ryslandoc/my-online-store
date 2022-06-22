export default class Card {
    constructor(prop1) {
        this.state = prop1;
        this.render();
    }

    getTemplate() {
        return `
        <div class="wrapper-main-info">
            <div class="wrapper-image">
                <img src="${this.state.images[0]}" alt="product-img">
            </div>
            <div class="wrapper-price">
                <div class="wrapper-button-rating">
                    <p>${this.state.rating}</p>
                    <img src="./images/rating.png" alt="rating-img">
                </div>
                <p></p>
            </div>
            <div class="wrapper-info-product">
                <p>${this.state.title}</p>
            </div>
            <div class="wrapper-category">
                <p>${this.state.category}</p>
            </div>
        </div>
        <div class="wrapper-button">
            <button class="add-btn">Add to cart</button>
        </div>
        `;
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('card-product');
        wrapper.innerHTML = this.getTemplate();
        this.wrapperElement = wrapper;
    }

    update(data = {}) {
        this.state = data;
        this.wrapperElement.innerHTML = this.getTemplate();
    }
}