export default class Pagination {
    defaultPageSize = 12;

    constructor({activePageIndex = 0}) {
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
        if (pageIndex === this.activePageIndex) return;
        if (pageIndex > this.defaultPageSize - 1 || pageIndex < 0) return;

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

    prevPage() {
        const prevPageIndex = this.activePageIndex - 1;
        this.setPage(prevPageIndex)
    }

    nextPage() {
        const nextPageIndex = this.activePageIndex + 1;
        this.setPage(nextPageIndex)
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-box');
        wrapper.innerHTML = this.getTemplate();
        this.wrapperElement = wrapper;
    }

    addEventListeners() {
        const nextBtn = this.wrapperElement.querySelector(`[data-element="nav-next"]`);
        const prevBtn = this.wrapperElement.querySelector(`[data-element="nav-prev"]`);
        const pageList = this.wrapperElement.querySelector(`[data-element="pagination"]`);

        nextBtn.addEventListener('click', () => {
            this.nextPage();
        });

        prevBtn.addEventListener('click', () => {
            this.prevPage();
        });

        pageList.addEventListener('click', event => {
            const pageItem = event.target.closest(`[data-element="page-link"]`);
            if (!pageItem) return;

            const pageIndex = pageItem.dataset.pageIndex;

            this.setPage(parseInt(pageIndex, 10));
        });
    }
}