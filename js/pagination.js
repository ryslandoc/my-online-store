export default class Pagination {
    defaultPageSize = 12;

    constructor({activePageIndex = 0} = {}) {
        this.activePageIndex = activePageIndex;
        this.render();
        this.addEventListeners();
    }

    getTemplate() {
        return `
        <div class="button-prev" data-element="nav-prev">
            <i class="bi bi-chevron-left"></i>
        </div>
        ${this.getPages()}
        <div class="button-next" data-element="nav-next">
             <i class="bi bi-chevron-right"></i>
        </div>
        `;
    }

    getPages() {
        return `
         <ul class="page-list" data-element="pagination">
               ${new Array(this.defaultPageSize).fill(1).map((item, index) => {
            return this.getPageTemplate(index);
        }).join('')}             
         </ul>
        `;
    }

    getPageTemplate(pageIndex = 0) {
        const isActive = pageIndex === this.activePageIndex ? 'active' : '';
        return `
         <li>
            <a href="javascript:void(0)" class="page-link ${isActive}"
               data-page-index="${pageIndex}" data-element="page-link">${pageIndex + 1}</a>
         </li>
        `;
    }

    setPage(pageIndex = 0) {
        // проверка если передаем активную страницу, чтоб не запускать метод
        if (pageIndex === this.activePageIndex) return;

        // если передаем больше страниц, -1 ставим так как у нас 12 страниц, а индексы от 0 до 11
        if (pageIndex > this.defaultPageSize -1 || pageIndex < 0) return;

        const activePage = this.wrapperElement.querySelector('.page-link.active');
        if (activePage) {
            activePage.classList.remove('active');
        }

        const nextActivePage = this.wrapperElement.querySelector(`[data-page-index="${pageIndex}"]`)
        if (nextActivePage) {
            nextActivePage.classList.add('active');
        }

        this.activePageIndex = pageIndex;
    }

    nextPage() {
        const nextPageIndex = this.activePageIndex + 1;
        this.setPage(nextPageIndex)
    }

    prevPage() {
        const prevPageIndex = this.activePageIndex - 1;
        this.setPage(prevPageIndex)
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.getTemplate();
        wrapper.classList.add('wrapper-box');
        this.wrapperElement = wrapper;
    }

    addEventListeners() {
        const prevPageBtn = this.wrapperElement.querySelector(`[data-element="nav-prev"]`);
        const nextPageBtn = this.wrapperElement.querySelector(`[data-element="nav-next"]`);
        const pagesList = this.wrapperElement.querySelector(`[data-element="pagination"]`)

        prevPageBtn.addEventListener('click', () => {
            this.prevPage();
        });

        nextPageBtn.addEventListener('click', () => {
            this.nextPage();
        });

        pagesList.addEventListener('click', event => {
            const pageItem = event.target.closest(`[data-element="page-link"]`);
            // !pageItem => pageItem === null
            if (!pageItem) return;

            const pageIndex = pageItem.dataset.pageIndex;

            this.setPage(parseInt(pageIndex, 10));
        });
    }
}