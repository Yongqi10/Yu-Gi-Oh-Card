import React from 'react';


function Paging({CardPerPage, totalCard, setCurrentPage}) {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCard / CardPerPage); i++)
    {
        pageNumbers.push(i)
    }


    return (<nav>
        <ul className='pagination'>
            {
                pageNumbers.map(number =>{
                    return(<li key = {number} className = 'page-number'>
                        <a onClick={setCurrentPage(number)} href='' className='page-link'>{number}</a>
                    </li>)
                })
            }
        </ul>
    </nav>);
}

export default Paging;