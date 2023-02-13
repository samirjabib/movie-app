
export const Pagination = ({page, totalPages}) => {
    
    const pagesPerBlock = 6
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const maxBlock = Math.ceil( totalPages / pagesPerBlock) 
    const initialPageInBlock = (currentBlock - 1) * pagesPerBlock + 1

    const arrPages = []
    const initialPage = ( currentBlock - 1) * pagesPerBlock + 1 
    const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock


    for(let i = initialPage; i <= finalPage; i++){
        arrPages.push(i)
    }


    return (
        <div>
            hola
        </div>
    );
};

