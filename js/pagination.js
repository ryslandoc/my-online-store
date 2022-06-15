export default class Pagination {
    defaultPageSize = 12;

    constructor() {
        this.render();
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

    getPages(){
        return `
         <ul class="page-list" data-element="pagination">
              ${new Array(this.defaultPageSize).fill(1).map((item, index) => {
                  return this.getTemplatePages(index);
        }).join(' ')}
        </ul>
        `;
    }

    getTemplatePages(pageIndex = 0){
        return `
         <li>
             <a href="javascript:void(0)" class="page-link active"
             data-page-index="${pageIndex}" data-element="page-link">${pageIndex + 1}</a>
         </li>
        `;
    }

    setPage() {

    }

    prevPage() {

    }

    nextPage() {

    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.getTemplate();
        wrapper.classList.add('wrapper-box');
        this.element = wrapper;
    }
}