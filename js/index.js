export default class Card {

    constructor(prop1) {
        this.productCard = prop1;
        this.myRender();
    }

    myRender() {
        const myElement = document.createElement('div');
        myElement.innerHTML = this.getTemplate();
        this.componentElement = myElement;
    }

    getTemplate() {
        return `
            <div class="card-product">
                <div class="wrapper-main-info">
                            <div class="wrapper-image">
                                <img src="${this.productCard.images[0]}" alt="product-img">
                            </div>
                            <div class="wrapper-price">
                                <div class="wrapper-button-rating">
                                    <p>${this.productCard.rating}</p>
                                    <img src="./images/rating.png" alt="rating-img">
                                </div>
                                <p>${this.productCard.price}</p>
                            </div>
                            <div class="wrapper-info-product">
                                <p>${this.productCard.title}</p>
                            </div>
                            <div class="wrapper-category">
                                <p>${this.productCard.category}</p>
                            </div>
                        </div>
                <div class="wrapper-button">
                            <button class="add-btn">Add to cart</button>
                        </div>
            </div>
        `;
    }
};