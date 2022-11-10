import React from 'react'

function Pagination({postsPerPage,totalPosts,paginate}) {
    const pageNumbers = []
    for (let i =1;i<Math.ceil(totalPosts/ postsPerPage);i++){
        pageNumbers.push(i)


    }
    console.log(pageNumbers);
  return (
   <nav>
    <ul className='pagination'>
        {pageNumbers.map(number => (
            <li key = {number} className = 'page-item'>
                <a href='!#' onClick={() => paginate(number)} className='page-link'>{number}</a>

            </li>
        ))}


    </ul>
   </nav>
  )
}

export default Pagination