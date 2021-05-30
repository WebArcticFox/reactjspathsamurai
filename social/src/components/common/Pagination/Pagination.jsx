import style from "./Pagination.module.css";
import React from "react";


let Pagination = ({totalUsersCount,pageSize,onPageChange,currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount/pageSize)

    let pages = [];
    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div className={style.pagination}>
            { pages.map(page => {
                return(
                    <div onClick={ (e) => { onPageChange(page) } } key={page} className={`${style.pagination_item} ${currentPage===page? style.active_page: ''}`}>{page}</div>
                )
            })}
        </div>
    )
}

export default Pagination