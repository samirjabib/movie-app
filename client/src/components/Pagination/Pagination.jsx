
export const Pagination = ({page, totalPages, setPage}) => {
    console.log(page)
    
    const pagesPerBlock = 6
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const maxBlock = Math.ceil( totalPages / pagesPerBlock) 

    const arrPages = []
    const initialPageInBlock = (currentBlock - 1) * pagesPerBlock + 1

    const finalPage = maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock


    for(let i = initialPageInBlock; i <= finalPage; i++){
        arrPages.push(i)
    }


    
    const handlePage = (numberPage) => {
        setPage(numberPage)
    }

    const handlePreviousPage = () => {
        if (page === 1) {
            setPage(1)
        } else {
            setPage(page-1)
        }
    }

    const handleNextPage = () => {
        if (page + 1 <= totalPages) {
        setPage(page + 1)
        }
    }


    return (
        <div className='bg-blue-500 mt-8'>
        <ul className=''>
            <li  
            className='cursor-pointer' 
            onClick={handlePreviousPage}>
                Retroceder
            </li>
          {
            arrPages.map(e => (
                <li 
                    className={`${page === e && ""}`} 
                    onClick={() => handlePage(e)} 
                    key={e}
                >
                    {e}
                </li>
            ))
          }
          <li className='' onClick={handleNextPage}>Avanzar</li>
        </ul>
  
      </div>
    );
};

