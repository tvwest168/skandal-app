import React from 'react'

function Pagination  ({postsPerPage,totalPosts,paginate,typeCategory}){
    const pageNumbers = [];
    for (let i = 1 ; i <= Math.ceil(totalPosts /postsPerPage); i++){
        pageNumbers.push(i);
    }
    console.log(typeCategory);
    //console.log(postsPerPage);
    
    var location = window.location.href;
    return (
        <nav>
        <ul className="pagination">
            {pageNumbers.map(number =>(
                <li key={number}  className="page-item">
                    <a onClick={()=>paginate(number)} href={location} className="page-link">
                       {number} 
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    )
}

export default Pagination
