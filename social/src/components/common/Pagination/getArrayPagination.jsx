let getArrayPagination = (totalUsersCount, pageSize, currentPage) => {
    let pagesCount = Math.ceil(totalUsersCount/pageSize)

    let range       = pageSize,
        totalPages  = pagesCount,
        start       = 1;

    let paging = [];

    if (currentPage < (range / 2) + 1 ) {
        start = 1;
    } else if (currentPage >= (totalPages - (range / 2) )) {
        start = Math.floor(totalPages - range + 1);

    } else {
        start = (currentPage - Math.floor(range / 2));
    }

    for (let i = start; i <= ((start + range) - 1); i++) {
        paging.push(i);
    }
    return paging
}

export default getArrayPagination