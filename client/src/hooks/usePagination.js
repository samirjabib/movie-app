import { useState } from "react"

export const usePagination = () => {

  const [ page, setPage ] = useState(1)
  const [ itemPerPage, setItemPerPage ] = useState(8)
  const initialItem = (page - 1) * itemPerPage
  const finalItem =  page * itemPerPage
  
  return{
    //Variables.
    page,
    itemPerPage,
    initialItem,
    finalItem

    //Methods
    
  }
}