export default class Card {

    constructor(prop1) {
        this.state = prop1;
        this.myRender();
    }

    myRender() {
        const myElement = document.createElement('div');
        myElement.innerHTML = this.getTemplate();
        this.componentElement = myElement;
    }

    update(data = {}){
        // i need to render new data
        this.state = data;
        this.componentElement.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
            <div class="card-product">
                <div class="wrapper-main-info">
                            <div class="wrapper-image">
                                <img src="${this.state.images[0]}" alt="product-img">
                            </div>
                            <div class="wrapper-price">
                                <div class="wrapper-button-rating">
                                    <p>${this.state.rating}</p>
                                    <img src="./images/rating.png" alt="rating-img">
                                </div>
                                <p>${this.state.price}</p>
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
            </div>
        `;
    }
};

