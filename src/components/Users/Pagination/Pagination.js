import s from "./Pagination.module.css";

const Pagination = ({currentPage, pageSize, totalUsersCount, setCurrentPage, setNextPage, setPrevPage}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 5; i <= currentPage + 5; i++) {
        pages.push(i);
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
      }
    }
  } else {
    for (let i = 1; i < pagesCount; i++) {
      pages.push(i)
    }
  }

  return (
    <div className={s.pagination}>
      <button className={s.paginationBtn} onClick={() => setPrevPage()}>{'<<'}</button>
      {
        pages.map((page, i) => (
          <span
            key={i}
            className={currentPage === page ? s.active : ''}
            onClick={() => setCurrentPage(page)}
          >{page}</span>
        ))
      }
      <button className={s.paginationBtn} onClick={() => setNextPage()}>{'>>'}</button>
    </div>
  );
};

export default Pagination;