export class PagerService {
    public limit = [25,50,100,250,500];
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 25) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        // ensure current page isn't out of range
        if (currentPage < 1) { 
            currentPage = 1; 
        } else if (currentPage > totalPages) { 
            currentPage = totalPages; 
        }
        let startPage: number, endPage: number;
        if (totalPages <= 3) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage == 1) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage > 3 && totalPages == currentPage) {
                startPage = currentPage - 1;
                endPage = currentPage;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    pageValidator(c_page,page,total){
        if(page != undefined ){
          if(c_page==page){
            return {result:false,value:c_page};
          }
          c_page =page;
        }
        if(c_page < 1){
          c_page=1;
          return {result:false,value:c_page};
        }else{ 
          if(c_page > total){
            c_page=total;
            return {result:false,value:c_page};
          }
        }
        return {result:true,value:c_page};
    }
}