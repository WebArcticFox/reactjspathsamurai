import style from "./Pagination.module.css";
import React from "react";
import getArrayPagination from "./getArrayPagination";


let Pagination = ({totalUsersCount,pageSize,onPageChange,currentPage}) => {
    let paging = getArrayPagination(totalUsersCount,pageSize,currentPage)

    return (
        <div className={style.pagination}>
            { paging.map(page => {
                return(
                    <div onClick={ (e) => { onPageChange(page) } } key={page} className={`${style.pagination_item} ${currentPage===page? style.active_page: ''}`}>{page}</div>
                )
            })}
        </div>
    )
}

export default Pagination