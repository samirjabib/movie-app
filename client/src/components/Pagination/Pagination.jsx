import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'



export const Pagination = ({page, totalPages, setPage}) => {
    
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
        <div className=' mt-8 w-[24rem] mx-auto '>
        <ul className='flex justify-between bg-green-100 dark:bg-[#131313] h-12 items-center w-full rounded-full px-7 '>
            <li  
                className={`text-black cursor-pointer dark:text-gray-100 ${page === 1  ? 'hidden' : ''}`} 
                    onClick={handlePreviousPage}>
                <GrLinkPrevious
                    color={'#22c55e'}
                />
            </li>
          {
            arrPages.map(e => (
                <li 
                    className={`text-black dark:text-gray-100 transition-all p-2 rounded-full w-8  h-8 cursor-pointer flex items-center justify-center ${e === page ? 'bg-green-500 font-bold' : 'bg-transparent'}`} 
                    onClick={() => handlePage(e)} 
                    key={e}
                >
                    {e}
                </li>
            ))
          }
          <li 
            className={`text-black cursor-pointer dark:text-gray-100`} 
            onClick={handleNextPage}
            >
                <GrLinkNext
                    color={'#22c55e'}
                />
            </li>
        </ul>
  
      </div>
    );
};

